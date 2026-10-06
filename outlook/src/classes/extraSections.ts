/**
 * Sections ajoutées au volet contact. `key` = clé renvoyée par le serveur
 * (voir SECTION_MODELS dans le module Odoo), `model` = modèle Odoo.
 * Pour ajouter une section : une ligne ici + la même clé côté serveur.
 */
export type ExtraSectionConfig = {
    key: string;
    model: string;
    title: string;
    noRecord: string;
    msgLogEmail: string;
};

export const EXTRA_SECTIONS: ExtraSectionConfig[] = [
    {
        key: 'sale_orders',
        model: 'sale.order',
        title: 'Devis / Commandes',
        noRecord: 'Aucun devis ni commande pour ce contact.',
        msgLogEmail: 'Consigner le mail sur ce devis / cette commande',
    },
    {
        key: 'purchase_orders',
        model: 'purchase.order',
        title: "Commandes d'achat",
        noRecord: "Aucune commande d'achat pour ce contact.",
        msgLogEmail: "Consigner le mail sur cette commande d'achat",
    },
    {
        key: 'delivery_orders',
        model: 'stock.picking',
        title: 'Bons de livraison',
        noRecord: 'Aucun bon de livraison pour ce contact.',
        msgLogEmail: 'Consigner le mail sur ce bon de livraison',
    },
    {
        key: 'receipts',
        model: 'stock.picking',
        title: 'Bons de réception',
        noRecord: 'Aucun bon de réception pour ce contact.',
        msgLogEmail: 'Consigner le mail sur ce bon de réception',
    },
    {
        key: 'applicants',
        model: 'hr.applicant',
        title: 'Recrutement',
        noRecord: 'Aucune candidature pour ce contact.',
        msgLogEmail: 'Consigner le mail sur cette candidature',
    },
    {
        key: 'employees',
        model: 'hr.employee',
        title: 'Employés',
        noRecord: 'Aucune fiche employé pour ce contact.',
        msgLogEmail: 'Consigner le mail sur cette fiche employé',
    },
];
