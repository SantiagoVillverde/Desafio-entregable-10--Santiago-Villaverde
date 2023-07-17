import cartService from "../service/cart.service.js";
import cartDao from "../daos/cart.dao.js";


class CartController {
    constructor() {
        this.service = new cartService(cartDao);
    }

    async addCart() {
        return this.service.addCart({ products: [] })
    }


    async getCartId(cid) {
        return await this.service.getCartId(cid)
    }

    async addProductCart(cid, pid) {

        return this.service.addProductCart(cid, pid);
    }


    async getCartProducts(cid) {
        return this.service.getCartProducts(cid)
    }


    async getCartContents(cid) {
        return this.service.getCartContents(cid)
    }

    async deleteProductCart(cid, pid) {
        return this.service.deleteProductCart(cid, pid)
    }


    async updateCart(cid, newProducts) {

        return this.service.updateCart(cid, newProducts);

    }

    async updateQuantityProduct(cid, pid, qty) {
        return this.service.updateQuantityProduct(cid, pid, qty)

    }

    async clearProductToCart(cid) {
        return this.service.clearProductToCart(cid);
    }


}

const cartController = new CartController;
export default cartController;