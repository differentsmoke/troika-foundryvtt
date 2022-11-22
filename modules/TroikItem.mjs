export class TroikItem extends Item {
    prepareData(){
        super.prepareData();
        console.log(this.type, this.items);
    }
}