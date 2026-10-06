import Partner from '../../../classes/Partner';
import ExtraRecord from '../../../classes/ExtraRecord';
import { ExtraSectionConfig } from '../../../classes/extraSections';
import * as React from 'react';
import AppContext from '../AppContext';
import Section from '../Section/Section';

type SectionExtraProps = {
    partner: Partner;
    canCreatePartner: boolean;
    config: ExtraSectionConfig;
};

/** Section en lecture seule, générique, pilotée par extraSections.ts. */
class SectionExtra extends React.Component<SectionExtraProps, {}> {
    render() {
        const { config, partner } = this.props;
        return (
            <Section
                records={partner.extra[config.key]}
                partner={partner}
                canCreatePartner={this.props.canCreatePartner}
                readOnly={true}
                model={config.model}
                title={config.title}
                titleCount={config.title + ' (%(count)s)'}
                msgNoPartner="Enregistrez le contact pour voir ces informations."
                msgNoPartnerNoAccess="Le contact doit exister pour voir ces informations."
                msgNoRecord={config.noRecord}
                msgLogEmail={config.msgLogEmail}
                getRecordDescription={(record: ExtraRecord) => record.description}
            />
        );
    }
}
SectionExtra.contextType = AppContext;
export default SectionExtra;
