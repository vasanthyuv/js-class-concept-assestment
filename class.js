class Product {
    constructor(productcode, productname, stock, price) {
        this.productcode = productcode;
        this.productname = productname;
        this.stock = stock;
        this.price = price;
    }
    getter() {
        console.log('stockvalue' + this.stockvalue);

    }

    display() {
        console.log('productcode:' + this.productcode);
        console.log('productname:' + this.productname);
        console.log('stock:' + this.stock);
        console.log('price:' + this.price);


    }
}
class Activity extends Product {


    constructor(cproductcode,productname,stock,price,customername, quantitysold, totalamount) {
        super(cproductcode,productname,stock,price);
        this.customername = customername;

        this.quantitysold = quantitysold;
        this.totalamount = totalamount;
    }
    beforesales() {
        console.log('the available stock before sales is'+this.stock);
        

    }
    sales() {

      
        if(this.stock==0){
            console.log('stocks are sold');

        } else {
            var stockbalance =this.stock- this.quantitysold ;
            var temp=this.stock;
        
           /* this.stock=stockbalance;*/
        }
        if (stockbalance >=  0) {
            
            var total=this.quantitysold*this.price;
            this.stock=stockbalance;
            console.log('the total value of stock sold:'+this.quantitysold );
            console.log('the amount of stock sold is'+total);
            console.log('the balnce amout of stock is'+stockbalance);
            console.log('the stock balance after sales'+this.stock);
          
            

        }
        else {
            var total1=temp*this.price;

            console.log(`The available quantity will be sold ${this.stock}`); 
            console.log('the amount of stock sold is'+total1);
            this.stock = 0; 
            console.log('the available stock is:'+this.stock);
            console.log('the stock balance after sales'+this.stock);
         
        }
       



    }
    display01(){
        super.display();
        console.log('customer:'+this.customername);
        console.log('quantity sold:'+this.quantitysold);
        console.log('totalamout:'+this.totalamount);
    }


    

}


var obj1=new Activity(123,'car',50,10,'vasanth',20,10);
obj1.sales();
obj1.beforesales();

obj1.display01();
