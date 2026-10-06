import Partner from '../../../classes/Partner';
import PurchaseOrder from '../../../classes/PurchaseOrder';
import * as React from 'react';
import AppContext from '../AppContext';
import Section from '../Section/Section';

type SectionPurchaseOrdersProps = {
    partner: Partner;
    canCreatePartner: boolean;
};

class SectionPurchaseOrders extends React.Component<SectionPurchaseOrdersProps, {}> {
    render() {
        return (
            <Section
                records={this.props.partner.purchaseOrders}
                partner={this.props.partner}
                canCreatePartner={this.props.canCreatePartner}
                readOnly={true}
                model="purchase.order"
                title="Commandes d'achat"
                titleCount="Commandes d'achat (%(count)s)"
                msgNoPartner="Enregistrez le contact pour voir ses commandes d'achat."
                msgNoPartnerNoAccess="Le contact doit exister pour voir ses commandes d'achat."
                msgNoRecord="Aucune commande d'achat pour ce contact."
                msgLogEmail="Consigner le mail sur cette commande d'achat"
                getRecordDescription={(order: PurchaseOrder) =>
                    [order.stateLabel, order.amountDisplay].filter(Boolean).join(' · ')
                }
            />
        );
    }
}
SectionPurchaseOrders.contextType = AppContext;
export default SectionPurchaseOrders;
