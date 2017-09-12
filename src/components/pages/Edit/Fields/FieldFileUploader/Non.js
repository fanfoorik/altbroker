 import HTML5Backend from 'react-dnd-html5-mixed-backend/lib/HTML5Backend';
import { getNodeClientOffset, getEventClientOffset, getDragPreviewOffset } from 'react-dnd-html5-mixed-backend/lib/OffsetUtils';
class NonNativeHTML5Backend extends HTML5Backend {
  constructor(manager) {
    super(manager);
    // this.getSourceClientOffset = this.getSourceClientOffset.bind(this);
    this.handleTopDragStart = this.handleTopDragStart.bind(this);
    // this.handleTopDragStartCapture = this.handleTopDragStartCapture.bind(this);
    // this.handleTopDragEndCapture = this.handleTopDragEndCapture.bind(this);
    // this.handleTopDragEnter = this.handleTopDragEnter.bind(this);
    // this.handleTopDragEnterCapture = this.handleTopDragEnterCapture.bind(this);
    // this.handleTopDragLeaveCapture = this.handleTopDragLeaveCapture.bind(this);
    // this.handleTopDragOver = this.handleTopDragOver.bind(this);
    // this.handleTopDragOverCapture = this.handleTopDragOverCapture.bind(this);
    // this.handleTopDrop = this.handleTopDrop.bind(this);
    // this.handleTopDropCapture = this.handleTopDropCapture.bind(this);
    // this.handleSelectStart = this.handleSelectStart.bind(this);
    // this.endDragIfSourceWasRemovedFromDOM = this.endDragIfSourceWasRemovedFromDOM.bind(this);
    // this.endDragNativeItem = this.endDragNativeItem.bind(this);
    // this.asyncEndDragNativeItem = this.asyncEndDragNativeItem.bind(this);
  }

  handleTopDragStart(e) {
    this.actions.beginDrag(this.dragStartSourceIds);
    super.handleTopDragStart(e);
  }

  // endDragNativeItem(e) {
  //   console.log(this.dragStartSourceIds, 2)
  //   super.endDragNativeItem(e);
  // }
  //
  // handleTopDrop(e) {
  //   console.log(this.dragStartSourceIds, 3)
  //   super.handleTopDrop(e);
  // }
  //
  // getSourceClientOffset(e) {
  //   console.log(this.dragStartSourceIds, 4)
  //   super.getSourceClientOffset(e);
  // }
  // handleTopDragStartCapture(e) {
  //   console.log(this.dragStartSourceIds, 5)
  //   super.handleTopDragStartCapture(e);
  // }
  // handleTopDragEndCapture(e) {
  //   console.log(this.dragStartSourceIds, 6)
  //   super.handleTopDragEndCapture(e);
  // }
  // handleTopDragEnter(e) {
  //   console.log(this.dragStartSourceIds, 7)
  //   super.handleTopDragEnter(e);
  // }
  // handleTopDragEnterCapture(e) {
  //   console.log(this.dragStartSourceIds, 8)
  //   super.handleTopDragEnterCapture(e);
  // }
  // handleTopDragLeaveCapture(e) {
  //   console.log(this.dragStartSourceIds, 9)
  //   super.handleTopDragLeaveCapture(e);
  // }
  // handleTopDragOver(e) {
  //   console.log(this.dragStartSourceIds, 10)
  //   super.handleTopDragOver(e);
  // }
  // handleTopDragOverCapture(e) {
  //   console.log(this.dragStartSourceIds, 11)
  //   super.handleTopDragOverCapture(e);
  // }
  // handleTopDrop(e) {
  //   console.log(this.dragStartSourceIds, 12)
  //   super.handleTopDrop(e);
  // }
  // handleTopDropCapture(e) {
  //   console.log(this.dragStartSourceIds, 13)
  //   super.handleTopDropCapture(e);
  // }
  // handleSelectStart(e) {
  //   console.log(this.dragStartSourceIds, 14)
  //   super.handleSelectStart(e);
  // }
  // endDragIfSourceWasRemovedFromDOM(e) {
  //   console.log(this.dragStartSourceIds, 15)
  //   super.endDragIfSourceWasRemovedFromDOM(e);
  // }
  // endDragNativeItem(e) {
  //   console.log(this.dragStartSourceIds, 16)
  //   super.endDragNativeItem(e);
  // }
  // asyncEndDragNativeItem(e) {
  //   console.log(this.dragStartSourceIds, 17)
  //   super.asyncEndDragNativeItem(e);
  // }
}

export default function createHTML5Backend(manager) {
  console.log(manager)
  return new NonNativeHTML5Backend(manager);
}