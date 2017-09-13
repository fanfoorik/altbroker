import HTML5Backend from 'react-dnd-html5-mixed-backend/lib/HTML5Backend';
import { getEventClientOffset, getDragPreviewOffset } from 'react-dnd-html5-mixed-backend/lib/OffsetUtils';
import { matchNativeItemType } from 'react-dnd-html5-mixed-backend/lib/NativeDragSources';

class NonNativeHTML5Backend extends HTML5Backend {
  constructor(manager) {
    super(manager);
    this.handleTopDragStart = this.handleTopDragStart.bind(this);
  }

  handleTopDragStart(e) {
    const { dragStartSourceIds } = this;
    this.dragStartSourceIds = null;

    const clientOffset = getEventClientOffset(e);

  // Don't publish the source just yet (see why below)
    try {
      this.actions.beginDrag(dragStartSourceIds, {
        publishSource: false,
        getSourceClientOffset: this.getSourceClientOffset,
        clientOffset,
      });
    } catch(er) {
      return;
    }

    const { dataTransfer } = e;
    const nativeType = matchNativeItemType(dataTransfer);

    if (this.monitor.isDragging()) {
      if (typeof dataTransfer.setDragImage === 'function') {
        // Use custom drag image if user specifies it.
        // If child drag source refuses drag but parent agrees,
        // use parent's node as drag image. Neither works in IE though.
        const sourceId = this.monitor.getSourceId();
        const sourceNode = this.sourceNodes[sourceId];
        const dragPreview = this.sourcePreviewNodes[sourceId] || sourceNode;
        const { anchorX, anchorY } = this.getCurrentSourcePreviewNodeOptions();
        const anchorPoint = { anchorX, anchorY };
        const dragPreviewOffset = getDragPreviewOffset(
          sourceNode,
          dragPreview,
          clientOffset,
          anchorPoint,
        );
        dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
      }

      try {
        // Firefox won't drag without setting data
        dataTransfer.setData('application/json', {});
      } catch (err) {
        // IE doesn't support MIME types in setData
      }

      // Store drag source node so we can check whether
      // it is removed from DOM and trigger endDrag manually.
      this.setCurrentDragSourceNode(e.target);

      // Now we are ready to publish the drag source.. or are we not?
      const { captureDraggingState } = this.getCurrentSourcePreviewNodeOptions();
      if (!captureDraggingState) {
        // Usually we want to publish it in the next tick so that browser
        // is able to screenshot the current (not yet dragging) state.
        //
        // It also neatly avoids a situation where render() returns null
        // in the same tick for the source element, and browser freaks out.
        setTimeout(() => this.actions.publishDragSource());
      } else {
        // In some cases the user may want to override this behavior, e.g.
        // to work around IE not supporting custom drag previews.
        //
        // When using a custom drag layer, the only way to prevent
        // the default drag preview from drawing in IE is to screenshot
        // the dragging state in which the node itself has zero opacity
        // and height. In this case, though, returning null from render()
        // will abruptly end the dragging, which is not obvious.
        //
        // This is the reason such behavior is strictly opt-in.
        this.actions.publishDragSource();
      }
    } else if (nativeType) {
      // A native item (such as URL) dragged from inside the document
      this.beginDragNativeItem(nativeType);
    } else if (
      !dataTransfer.types && (
        !e.target.hasAttribute ||
        !e.target.hasAttribute('draggable')
      )
    ) {
      // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
      // Just let it drag. It's a native type (URL or text) and will be picked up in
      // dragenter handler.
      return; // eslint-disable-line no-useless-return
    } else {
      e.preventDefault();
    }
  }
}

export default function createHTML5Backend(manager) {
  return new NonNativeHTML5Backend(manager);
}