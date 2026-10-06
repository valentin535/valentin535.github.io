/**
 * Enregistrement générique renvoyé par le module serveur
 * mail_plugin_sale_purchase : un identifiant, un nom et une ligne de détail
 * déjà mise en forme par le serveur.
 */
export default class ExtraRecord {
    id: number;
    name: string;
    description: string;

    static fromJSON(o: Object): ExtraRecord {
        const record = new ExtraRecord();
        record.id = o['order_id'];
        record.name = o['name'];
        record.description = o['description'] || '';
        return record;
    }
}
