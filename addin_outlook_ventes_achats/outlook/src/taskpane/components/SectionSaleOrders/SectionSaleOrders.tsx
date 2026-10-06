import Partner from '../../../classes/Partner';
import SaleOrder from '../../../classes/SaleOrder';
import * as React from 'react';
import AppContext from '../AppContext';
import Section from '../Section/Section';

type SectionSaleOrdersProps = {
    partner: Partner;
    canCreatePartner: boolean;
};

class SectionSaleOrders extends React.Component<SectionSaleOrdersProps, {}> {
    render() {
        return (
            <Section
                records={this.props.partner.saleOrders}
                partner={this.props.partner}
                canCreatePartner={this.props.canCreatePartner}
                readOnly={true}
                model="sale.order"
                title="Devis / Commandes"
                titleCount="Devis / Commandes (%(count)s)"
                msgNoPartner="Enregistrez le contact pour voir ses devis."
                msgNoPartnerNoAccess="Le contact doit exister pour voir ses devis."
                msgNoRecord="Aucun devis ni commande pour ce contact."
                msgLogEmail="Consigner le mail sur ce devis / cette commande"
                getRecordDescription={(order: SaleOrder) =>
                    [order.stateLabel, order.amountDisplay].filter(Boolean).join(' · ')
                }
            />
        );
    }
}
SectionSaleOrders.contextType = AppContext;
export default SectionSaleOrders;
