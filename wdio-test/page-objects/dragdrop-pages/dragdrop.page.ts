import Page from '../page.js';

class DragDropPage extends Page {
   
    get draggableDiv(){ return $(`//div[@id='draggable']`) };
    get droppableDiv(){ return $(`//div[@id='droppable']`) };
    get confirmDroppedText(){ return $(`//p[normalize-space()='Dropped!']`) };


    async dragAndDropDiv(){
        const elmDraggableDiv = await this.draggableDiv;
        const elmDroppableDiv = await this.droppableDiv;
        await this.dragAndDropElm(elmDraggableDiv,elmDroppableDiv);
    }

    async confirmDropped(){
        const elmConfirmDroppedText = await this.confirmDroppedText;
        await this.verifyElement(elmConfirmDroppedText);
    }

}

export default new DragDropPage();
