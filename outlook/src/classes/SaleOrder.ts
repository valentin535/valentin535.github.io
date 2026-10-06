/**
 * Devis / commande de vente (sale.order) renvoyé par le module serveur
 * mail_plugin_sale_purchase.
 */
export default class SaleOrder {
    id: number;
    name: string;
    stateLabel: string;
    amountDisplay: string;

    static fromJSON(o: Object): SaleOrder {
        const order = new SaleOrder();
        order.id = o['order_id'];
        order.name = o['name'];
        order.stateLabel = o['state_label'] || '';
        order.amountDisplay = o['amount_display'] || '';
        return order;
    }
}
