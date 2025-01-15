
import Layout from './components/Layout';
import ActionBar from './components/ActionBar';
import Label from './components/Label';
import Form from './components/Form';
import TextField from './components/TextField';
import Button from './components/Button';

import React from 'react';


/**
 * Screen Metadata:
 * - Schema Version: N/A
 * - Package Name: N/A
 * - Application Title: N/A
 * - Screen ID: N/A
 */


export default function MyScreen({ }) {
    return (
        <>


            <Layout id="vlDetailLayout" align="Top" backGroundColor="" showBorder={false} containerType="None" styleName="ixMainLayout" type1="Vertical" width="100%" height="100%" visible={true} membersMargin="15" minMemberLength="10" showResizeBar={false} captionType="ShortLabel" addExtraProperties={false} isToolStrip={false} componentType="None" canBeHidden={false}>
                <ActionBar id="chcApplicationHeader" title="WNW-CUS-INFO" showInfoButton={true} infoButtonType="Button" showCenterLogo={true} logoImageHeight="0" logoImageWidth="0" showBackButton={true} backButtonType="ImageButton" showLeftLogo={false} leftLogoImageHeight="0" leftLogoImageWidth="0" showExpandButton={false} expandButtonType="ImageButton" showSortButton={false} sortMenuOptions="" sortButtonType="ImageButton" showSettingsButton={false} settingsButtonType="ImageButton" showAdditionalFiltersButton={false} additionalFiltersButtonType="ImageButton" logoutState="None" gridNavigationButtons="None" showApplicationAccessMode="None" type="CustomHeaderContainer" navigationButtonHeight="0" navigationButtonWidth="0" canBeHidden={false} useDefaultStyle={false} headerStyleType="None" headerStyleName="ixMainHeaderLayout" headerTitleStyle="ixMainHeaderTitle">

                </ActionBar>
                <Layout id="vl3" align="Center" backGroundColor="" showBorder={false} containerType="None" styleName="ixBrowseLayout" type1="Vertical" autoWidth={false} autoHeight={false} width="100%" height="100%" visible={true} showResizeBar={false} title="XXX-XXX" captionType="ShortLabel" addExtraProperties={true} isToolStrip={false} componentType="None" canBeHidden={false}>
                    <Layout id="vlAddAccount" align="Top" backGroundColor="" showBorder={false} containerType="None" styleName="ixFilterContainer" type1="Vertical" autoWidth={false} autoHeight={false} width="440" height="140" visible={true} membersMargin="5" showResizeBar={false} title="XXX-XXX" captionType="ShortLabel" addExtraProperties={false} isToolStrip={false} componentType="None" canBeHidden={false}>
                        <Layout id="hlAddAcountTitle" align="Left" backGroundColor="" showBorder={false} containerType="None" type1="Horizontal" autoWidth={false} autoHeight={true} width="100%" height="25" visible={true} membersMargin="5" showResizeBar={false} title="XXX-XXX" captionType="ShortLabel" addExtraProperties={false} isToolStrip={false} componentType="None" canBeHidden={false}>
                            <Label id="lblTitle" title="WNW-ADD-NACCT" captionType="LongLabel" visible={true} enabled={true} styleName="titleLabelBold" autoWidth={false} autoHeight={false} iconType="Icon" showFontIconOnlyInTitle={false} fontIconAlignment="Right" width="200" height="20" addExtraProperties={false} canBeHidden={false}>

                            </Label>
                        </Layout>
                        <Form id="df1" wrapTitles={false} backGroundColor="" cellBorder={true} showBorder={false} autoWidth={false} autoHeight={true} width="100%" height="58" visible={true} numberOfColumns="2" columnWidth="204,0" autoFocus={false} captionType="ShortLabel" itemChanged={false} defaultColumnWidthFlag={true} addExtraProperties={false} canBeHidden={false} title="XXX-XXX">
                            <TextField id="txtCusId" showTitle={true} title="CUS-ID" captionType="LongLabel" showTitleAsLink={false} width="0" visible={true} enabled={true} setFilterInputText={false} columnSpan="1" characterCasing="Upper" stringLength="8" mandatory={false} startRow={false} endRow={false} showFontIconOnlyInTitle={false} fontIconAlignment="Right" type="Text" focusIn={false} onBlurEvent={false} addExtraProperties={false} disabledStyle="DEFAULT" canBeHidden={false}>

                            </TextField>
                            <TextField id="txtCusNm" showTitle={true} title="CUS-NM" captionType="LongLabel" showTitleAsLink={false} width="0" visible={true} enabled={true} setFilterInputText={false} columnSpan="1" characterCasing="None" stringLength="15" mandatory={false} startRow={false} endRow={false} showFontIconOnlyInTitle={false} fontIconAlignment="Right" type="Text" focusIn={false} onBlurEvent={false} addExtraProperties={false} disabledStyle="DEFAULT" canBeHidden={false}>

                            </TextField>
                        </Form>
                        <ActionBar id="wbbOkBtnBar" align="Right"   type="WindowButtonBar" addExtraProperties={false} canBeHidden={false} title="XXX-XXX">
                            <Button id="btnCmwOk" showTitle={true} title="Save" captionType="ShortLabel" visible={true} enabled={true} buttonType="Default" screenDefaultButton={true} isLeftSideButton={false} iconType="Font" showFontIconOnlyInTitle={true} fontIconAlignment="Right" fontIconClassName="ivChkM" fontIconSize="18" allowTab={true} autoWidth={true} width="30" height="30" inquiryMode="HideInInquiry" type1="Button" addExtraProperties={false} canBeHidden={false}>

                            </Button>
                        </ActionBar>
                    </Layout>
                </Layout>
            </Layout>
        </>
    );
}