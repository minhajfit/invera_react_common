import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import ActionBar from './components/ActionBar';
import Label from './components/Label';
import Form from './components/Form';
import TextField from './components/TextField';
import Button from './components/Button';
import MyScreenDelegate from './SampleScreenWithStateDelegate';

export default function MyScreen({ delegate }: { delegate: MyScreenDelegate }) {
    // State for cusId and cusNm with all properties
    const [cusIdState, setCusIdState] = useState({
        value: '',
        id: 'txtCusId',
        showTitle: true,
        title: 'CUS-ID',
        captionType: 'LongLabel' as 'LongLabel' | 'ShortLabel' | 'ColumnHeading', // Ensuring correct types
        characterCasing: 'Upper' as 'Upper' | 'Lower' | 'None',  // Correct casing types
 
        stringLength: '8',
        mandatory: false,
        // Add other properties as needed
        abc:"test"
    });

    const [cusNmState, setCusNmState] = useState({
        value: '',
        id: 'txtCusNm',
        showTitle: true,
        title: 'CUS-NM',
        captionType: 'LongLabel' as 'LongLabel' | 'ShortLabel' | 'ColumnHeading', // Ensuring correct types
        characterCasing: 'Upper' as 'Upper' | 'Lower' | 'None',  // Correct casing types
 
        stringLength: '15',
        mandatory: false,
        // Add other properties as needed
    });

    // Function to handle Save
    const handleSave = () => {
        console.log('cusIdState:', cusIdState.value);
        console.log('cusNmState:', cusNmState.value);
        delegate.onSave(cusIdState.value, cusNmState.value); // Delegate is responsible for handling the save action
    };

    // Expose a way for the delegate to modify the form fields
    useEffect(() => {
        // Pass setCusIdState and setCusNmState to the delegate to allow it to modify the state
        delegate.setValueCallback({
            setCusIdState,
            setCusNmState,
        });
    }, [delegate]);

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
                            {/* Bind the entire state to the TextField */}
                            <TextField
    
                                type="Text"
                                id={cusIdState.id}
                                showTitle={cusIdState.showTitle}
                                title={cusIdState.title}
                                captionType={cusIdState.captionType}
                                characterCasing={cusIdState.characterCasing}
                                stringLength={cusIdState.stringLength}
                                mandatory={cusIdState.mandatory}
                                value={cusIdState.value}
                                onChange={(e) => setCusIdState(prevState => ({ ...prevState, value: e.target.value }))} // Update state value on change
                            />
                            <TextField
                                type="Text"
                                id={cusNmState.id}
                                showTitle={cusNmState.showTitle}
                                title={cusNmState.title}
                                captionType={cusNmState.captionType}
                                stringLength={cusNmState.stringLength}
                                mandatory={cusNmState.mandatory}
                                value={cusNmState.value}
                                onChange={(e) => setCusNmState(prevState => ({ ...prevState, value: e.target.value }))} // Update state value on change
                            />
                        </Form>

                        <ActionBar id="wbbOkBtnBar" align="Right" type="WindowButtonBar" addExtraProperties={false} canBeHidden={false} title="XXX-XXX">
                            <Button
                                id="btnCmwOk"
                                showTitle={true}
                                title="Save"
                                captionType="ShortLabel"
                                visible={true}
                                enabled={true}
                                buttonType="Default"
                                screenDefaultButton={true}
                                isLeftSideButton={false}
                                fontIconClassName="ivChkM"
                                fontIconSize="18"
                                allowTab={true}
                                width="30"
                                height="30"
                                onClick={handleSave}
                            />
                        </ActionBar>
                    </Layout>
                </Layout>
            </Layout>
        </>
    );
}
