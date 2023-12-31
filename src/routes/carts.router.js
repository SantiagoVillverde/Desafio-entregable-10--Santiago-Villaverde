import { Router } from "express";
import { cartList } from "../utils/instances.js";
import cartController from "../controllers/cart.controller.js";

const cartRouter = Router();


cartRouter.post('/', async (req, res) => {
    try {
        const crearCarrito = await cartController.addCart()
        console.log(crearCarrito)
        res.status(201).send(crearCarrito);
    } catch (error) {
        res.status(500).send({ error });
    }
});


cartRouter.get('/:cid', async (req, res) => {
    const cid = req.params.cid;
    try {
        const getCartRouter = await cartController.getCartId(cid)
        console.log(getCartRouter)
        res.status(201).send(getCartRouter)
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});


cartRouter.post('/:cid/product/:pid', async (req, res) => {
    const cid = req.params.cid;
    const pid = req.params.pid;
    try {
        const addProdCart = await cartController.addProductCart(cid, pid);
        res.status(201).send(addProdCart);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});


cartRouter.delete('/:cid/product/:pid', async (req, res) => {
    const cid = req.params.cid;
    const pid = req.params.pid;
    try {
        const deleteProdCart = await cartController.deleteProductCart(cid, pid)
        res.status(201).send(deleteProdCart)
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
})


cartRouter.put('/:cid', async (req, res) => {
    const cid = req.params.cid;
    const newProducts = req.body;
    try {
        const productsNuevos = await cartController.updateCart(cid, newProducts)
        res.status(201).send(productsNuevos)
    } catch (error) {
        console.log("Error al tratar de actualizar el carrito", error);
        res.status(500).send("Error al tratar de actualizar el carrito");
    }
})


cartRouter.put('/:cid/product/:pid', async (req, res) => {
    const cid = req.params.cid;
    const pid = req.params.pid;
    const { quantity } = req.body;

    try {
        const updatedCart = await cartController.updateQuantityProduct(cid, pid, quantity);
        res.send(updatedCart);
    } catch (err) {
        res.status(500).send({ error: 'Error en la actualización de la cantidad' });
    }
});

cartRouter.delete('/:cid/product/', async (req, res) => {
    const cid = req.params.cid;
    try {

        const clearCart = await cartController.clearProductToCart(cid)
        res.send(clearCart);
    } catch (err) {
        res.status(500).send({ error: 'No se pudo vaciar el carrito' });
    }
})



export { cartRouter };
