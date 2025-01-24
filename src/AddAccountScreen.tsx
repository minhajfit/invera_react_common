import Layout from './components/Layout';
import ActionBar from './components/ActionBar';
import Label from './components/Label';
import Form from './components/Form';
import TextField from './components/TextField';
import Button from './components/Button';

import React, { useState, useEffect } from 'react';

import AddAccountScreenDelegate from './AddAccountScreenDelegate';

/**
 * Screen Metadata: TODO
 * - Schema Version: N/A
 * - Package Name: N/A
 * - Application Title: N/A
 * - Screen ID: N/A
 */

export default function AddAccountScreen({
  delegate,
}: {
  delegate: AddAccountScreenDelegate;
}) {
  const [vlDetailLayoutState, setvlDetailLayoutState] = useState({
    id: 'vlDetailLayout',
    align: 'Top',
    backGroundColor: '',
    showBorder: false,
    containerType: 'None',
    styleName: 'ixMainLayout',
    type1: 'Vertical',
    width: '100%',
    height: '100%',
    visible: true,
    membersMargin: '15',
    minMemberLength: '10',
    showResizeBar: false,
    captionType: 'ShortLabel',
    addExtraProperties: false,
    isToolStrip: false,
    componentType: 'None',
    canBeHidden: false,
  });
  const [chcApplicationHeaderState, setchcApplicationHeaderState] = useState({
    id: 'chcApplicationHeader',
    title: 'WNW-CUS-INFO',
    showInfoButton: true,
    infoButtonType: 'Button',
    showCenterLogo: true,
    logoImageHeight: '0',
    logoImageWidth: '0',
    showBackButton: true,
    backButtonType: 'ImageButton',
    showLeftLogo: false,
    leftLogoImageHeight: '0',
    leftLogoImageWidth: '0',
    showExpandButton: false,
    expandButtonType: 'ImageButton',
    showSortButton: false,
    sortMenuOptions: '',
    sortButtonType: 'ImageButton',
    showSettingsButton: false,
    settingsButtonType: 'ImageButton',
    showAdditionalFiltersButton: false,
    additionalFiltersButtonType: 'ImageButton',
    logoutState: 'None',
    gridNavigationButtons: 'None',
    showApplicationAccessMode: 'None',
    type: 'CustomHeaderContainer',
    navigationButtonHeight: '0',
    navigationButtonWidth: '0',
    canBeHidden: false,
    useDefaultStyle: false,
    headerStyleType: 'None',
    headerStyleName: 'ixMainHeaderLayout',
    headerTitleStyle: 'ixMainHeaderTitle',
  });
  const [vl3State, setvl3State] = useState({
    id: 'vl3',
    align: 'Center',
    backGroundColor: '',
    showBorder: false,
    containerType: 'None',
    styleName: 'ixBrowseLayout',
    type1: 'Vertical',
    autoWidth: false,
    autoHeight: false,
    width: '100%',
    height: '100%',
    visible: true,
    showResizeBar: false,
    title: 'XXX-XXX',
    captionType: 'ShortLabel',
    addExtraProperties: true,
    isToolStrip: false,
    componentType: 'None',
    canBeHidden: false,
  });
  const [vlAddAccountState, setvlAddAccountState] = useState({
    id: 'vlAddAccount',
    align: 'Top',
    backGroundColor: '',
    showBorder: false,
    containerType: 'None',
    styleName: 'ixFilterContainer',
    type1: 'Vertical',
    autoWidth: false,
    autoHeight: false,
    width: '440',
    height: '140',
    visible: true,
    membersMargin: '5',
    showResizeBar: false,
    title: 'XXX-XXX',
    captionType: 'ShortLabel',
    addExtraProperties: false,
    isToolStrip: false,
    componentType: 'None',
    canBeHidden: false,
  });
  const [hlAddAcountTitleState, sethlAddAcountTitleState] = useState({
    id: 'hlAddAcountTitle',
    align: 'Left',
    backGroundColor: '',
    showBorder: false,
    containerType: 'None',
    type1: 'Horizontal',
    autoWidth: false,
    autoHeight: true,
    width: '100%',
    height: '25',
    padding:1,
    visible: true,
    membersMargin: '5',
    showResizeBar: false,
    title: 'XXX-XXX',
    captionType: 'ShortLabel',
    addExtraProperties: false,
    isToolStrip: false,
    componentType: 'None',
    canBeHidden: false,
  });
  const [lblTitleState, setlblTitleState] = useState({
    id: 'lblTitle',
    title: 'WNW-ADD-NACCT',
    captionType: 'LongLabel',
    visible: true,
    enabled: true,
    styleName: 'titleLabelBold',
    autoWidth: false,
    autoHeight: false,
    iconType: 'Icon',
    showFontIconOnlyInTitle: false,
    fontIconAlignment: 'Right',
    width: '200',
    height: '20',
    addExtraProperties: false,
    canBeHidden: false,
  });
  const [df1State, setdf1State] = useState({
    id: 'df1',
    wrapTitles: false,
    backGroundColor: '',
    cellBorder: true,
    showBorder: false,
    autoWidth: false,
    autoHeight: true,
    width: '100%',
    height: '58',
    visible: true,
    numberOfColumns: '12',
    columnWidth: '204,0',
    autoFocus: false,
    captionType: 'ShortLabel',
    itemChanged: false,
    defaultColumnWidthFlag: true,
    addExtraProperties: false,
    canBeHidden: false,
    title: 'XXX-XXX',
  });
  const [txtCusIdState, settxtCusIdState] = useState({
    id: 'txtCusId',
    showTitle: true,
    title: 'CUS-ID',
    captionType: 'LongLabel',
    showTitleAsLink: false,
    width: '0',
    visible: true,
    enabled: true,
    setFilterInputText: false,
    columnSpan: '12',
    characterCasing: 'Upper',
    stringLength: '12',
    mandatory: false,
    startRow: false,
    endRow: false,
    showFontIconOnlyInTitle: false,
    fontIconAlignment: 'Right',
    type: 'Text',
    focusIn: false,
    onBlurEvent: false,
    addExtraProperties: false,
    disabledStyle: 'DEFAULT',
    canBeHidden: false,
  });
  const [txtCusNmState, settxtCusNmState] = useState({
    id: 'txtCusNm',
    showTitle: true,
    title: 'CUS-NM',
    captionType: 'LongLabel',
    showTitleAsLink: false,
    width: '0',
    visible: true,
    enabled: true,
    setFilterInputText: false,
    columnSpan: '12',
    characterCasing: 'None',
    stringLength: '15',
    mandatory: false,
    startRow: false,
    endRow: false,
    showFontIconOnlyInTitle: false,
    fontIconAlignment: 'Right',
    type: 'Text',
    focusIn: false,
    onBlurEvent: false,
    addExtraProperties: false,
    disabledStyle: 'DEFAULT',
    canBeHidden: false,
  });
  const [wbbOkBtnBarState, setwbbOkBtnBarState] = useState({
    id: 'wbbOkBtnBar',
    align: 'Right',
    type: 'WindowButtonBar',
    addExtraProperties: false,
    canBeHidden: false,
    title: 'XXX-XXX',
  });
  const [btnCmwOkState, setbtnCmwOkState] = useState({
    id: 'btnCmwOk',
    showTitle: true,
    title: 'Save',
    captionType: 'ShortLabel',
    visible: true,
    enabled: true,
    buttonType: 'Default',
    screenDefaultButton: true,
    isLeftSideButton: false,
    iconType: 'Font',
    showFontIconOnlyInTitle: true,
    fontIconAlignment: 'Right',
    fontIconClassName: 'ivChkM',
    fontIconSize: '18',
    allowTab: true,
    autoWidth: true,
    width: '30',
    height: '30',
    inquiryMode: 'HideInInquiry',
    type1: 'Button',
    addExtraProperties: false,
    canBeHidden: false,
  });

  const handle_btnCmwOk = () => {
    delegate.handle_btnCmwOk();
  };

  // Expose a way for the delegate to modify the form fields
  useEffect(() => {
    // Pass to the delegate to allow it to modify the state
    delegate.setValueCallback({
      vlDetailLayoutState: {
        set: (state) => setvlDetailLayoutState(state),
        get: () => vlDetailLayoutState,
      },
      chcApplicationHeaderState: {
        set: (state) => setchcApplicationHeaderState(state),
        get: () => chcApplicationHeaderState,
      },
      vl3State: { set: (state) => setvl3State(state), get: () => vl3State },
      vlAddAccountState: {
        set: (state) => setvlAddAccountState(state),
        get: () => vlAddAccountState,
      },
      hlAddAcountTitleState: {
        set: (state) => sethlAddAcountTitleState(state),
        get: () => hlAddAcountTitleState,
      },
      lblTitleState: {
        set: (state) => setlblTitleState(state),
        get: () => lblTitleState,
      },
      df1State: { set: (state) => setdf1State(state), get: () => df1State },
      txtCusIdState: {
        set: (state) => settxtCusIdState(state),
        get: () => txtCusIdState,
      },
      txtCusNmState: {
        set: (state) => settxtCusNmState(state),
        get: () => txtCusNmState,
      },
      wbbOkBtnBarState: {
        set: (state) => setwbbOkBtnBarState(state),
        get: () => wbbOkBtnBarState,
      },
      btnCmwOkState: {
        set: (state) => setbtnCmwOkState(state),
        get: () => btnCmwOkState,
      },
    });
  }, [delegate]);

  return (
    <>
      <Layout
        id={vlDetailLayoutState.id}
        align={vlDetailLayoutState.align}
        backGroundColor={vlDetailLayoutState.backGroundColor}
        showBorder={vlDetailLayoutState.showBorder}
        containerType={vlDetailLayoutState.containerType}
        styleName={vlDetailLayoutState.styleName}
        type1={vlDetailLayoutState.type1}
        width={vlDetailLayoutState.width}
        height={vlDetailLayoutState.height}
        visible={vlDetailLayoutState.visible}
        membersMargin={vlDetailLayoutState.membersMargin}
        minMemberLength={vlDetailLayoutState.minMemberLength}
        showResizeBar={vlDetailLayoutState.showResizeBar}
        captionType={vlDetailLayoutState.captionType}
        addExtraProperties={vlDetailLayoutState.addExtraProperties}
        isToolStrip={vlDetailLayoutState.isToolStrip}
        componentType={vlDetailLayoutState.componentType}
        canBeHidden={vlDetailLayoutState.canBeHidden}
      >
        <ActionBar
          id={chcApplicationHeaderState.id}
          title={chcApplicationHeaderState.title}
          showInfoButton={chcApplicationHeaderState.showInfoButton}
          infoButtonType={chcApplicationHeaderState.infoButtonType}
          showCenterLogo={chcApplicationHeaderState.showCenterLogo}
          logoImageHeight={chcApplicationHeaderState.logoImageHeight}
          logoImageWidth={chcApplicationHeaderState.logoImageWidth}
          showBackButton={chcApplicationHeaderState.showBackButton}
          backButtonType={chcApplicationHeaderState.backButtonType}
          showLeftLogo={chcApplicationHeaderState.showLeftLogo}
          leftLogoImageHeight={chcApplicationHeaderState.leftLogoImageHeight}
          leftLogoImageWidth={chcApplicationHeaderState.leftLogoImageWidth}
          showExpandButton={chcApplicationHeaderState.showExpandButton}
          expandButtonType={chcApplicationHeaderState.expandButtonType}
          showSortButton={chcApplicationHeaderState.showSortButton}
          sortMenuOptions={chcApplicationHeaderState.sortMenuOptions}
          sortButtonType={chcApplicationHeaderState.sortButtonType}
          showSettingsButton={chcApplicationHeaderState.showSettingsButton}
          settingsButtonType={chcApplicationHeaderState.settingsButtonType}
          showAdditionalFiltersButton={
            chcApplicationHeaderState.showAdditionalFiltersButton
          }
          additionalFiltersButtonType={
            chcApplicationHeaderState.additionalFiltersButtonType
          }
          logoutState={chcApplicationHeaderState.logoutState}
          gridNavigationButtons={
            chcApplicationHeaderState.gridNavigationButtons
          }
          showApplicationAccessMode={
            chcApplicationHeaderState.showApplicationAccessMode
          }
          type={chcApplicationHeaderState.type}
          navigationButtonHeight={
            chcApplicationHeaderState.navigationButtonHeight
          }
          navigationButtonWidth={
            chcApplicationHeaderState.navigationButtonWidth
          }
          canBeHidden={chcApplicationHeaderState.canBeHidden}
          useDefaultStyle={chcApplicationHeaderState.useDefaultStyle}
          headerStyleType={chcApplicationHeaderState.headerStyleType}
          headerStyleName={chcApplicationHeaderState.headerStyleName}
          headerTitleStyle={chcApplicationHeaderState.headerTitleStyle}
        ></ActionBar>
        <Layout
          id={vl3State.id}
          align={vl3State.align}
          backGroundColor={vl3State.backGroundColor}
          showBorder={vl3State.showBorder}
          containerType={vl3State.containerType}
          styleName={vl3State.styleName}
          type1={vl3State.type1}
          autoWidth={vl3State.autoWidth}
          autoHeight={vl3State.autoHeight}
          width={vl3State.width}
          height={vl3State.height}
          visible={vl3State.visible}
          showResizeBar={vl3State.showResizeBar}
          title={vl3State.title}
          captionType={vl3State.captionType}
          addExtraProperties={vl3State.addExtraProperties}
          isToolStrip={vl3State.isToolStrip}
          componentType={vl3State.componentType}
          canBeHidden={vl3State.canBeHidden}
        >
          <Layout
            id={vlAddAccountState.id}
            align={vlAddAccountState.align}
            backGroundColor={vlAddAccountState.backGroundColor}
            showBorder={vlAddAccountState.showBorder}
            containerType={vlAddAccountState.containerType}
            styleName={vlAddAccountState.styleName}
            type1={vlAddAccountState.type1}
            autoWidth={vlAddAccountState.autoWidth}
            autoHeight={vlAddAccountState.autoHeight}
            width={vlAddAccountState.width}
            height={vlAddAccountState.height}
            visible={vlAddAccountState.visible}
            membersMargin={vlAddAccountState.membersMargin}
            showResizeBar={vlAddAccountState.showResizeBar}
            title={vlAddAccountState.title}
            captionType={vlAddAccountState.captionType}
            addExtraProperties={vlAddAccountState.addExtraProperties}
            isToolStrip={vlAddAccountState.isToolStrip}
            componentType={vlAddAccountState.componentType}
            canBeHidden={vlAddAccountState.canBeHidden}
          >
            <Layout
              id={hlAddAcountTitleState.id}
              align={hlAddAcountTitleState.align}
              backGroundColor={hlAddAcountTitleState.backGroundColor}
              showBorder={hlAddAcountTitleState.showBorder}
              containerType={hlAddAcountTitleState.containerType}
              type1={hlAddAcountTitleState.type1}
              autoWidth={hlAddAcountTitleState.autoWidth}
              autoHeight={hlAddAcountTitleState.autoHeight}
              width={hlAddAcountTitleState.width}
              height={hlAddAcountTitleState.height}
              visible={hlAddAcountTitleState.visible}
              membersMargin={hlAddAcountTitleState.membersMargin}
              showResizeBar={hlAddAcountTitleState.showResizeBar}
              title={hlAddAcountTitleState.title}
              captionType={hlAddAcountTitleState.captionType}
              addExtraProperties={hlAddAcountTitleState.addExtraProperties}
              isToolStrip={hlAddAcountTitleState.isToolStrip}
              componentType={hlAddAcountTitleState.componentType}
              canBeHidden={hlAddAcountTitleState.canBeHidden}
              padding={hlAddAcountTitleState.padding}
            >
              <Label
                id={lblTitleState.id}
                title={lblTitleState.title}
                captionType={lblTitleState.captionType}
                visible={lblTitleState.visible}
                enabled={lblTitleState.enabled}
                styleName={lblTitleState.styleName}
                autoWidth={lblTitleState.autoWidth}
                autoHeight={lblTitleState.autoHeight}
                iconType={lblTitleState.iconType}
                showFontIconOnlyInTitle={lblTitleState.showFontIconOnlyInTitle}
                fontIconAlignment={lblTitleState.fontIconAlignment}
                width={lblTitleState.width}
                height={lblTitleState.height}
                addExtraProperties={lblTitleState.addExtraProperties}
                canBeHidden={lblTitleState.canBeHidden}
              ></Label>
            </Layout>
            <Form
              id={df1State.id}
              wrapTitles={df1State.wrapTitles}
              backGroundColor={df1State.backGroundColor}
              cellBorder={df1State.cellBorder}
              showBorder={df1State.showBorder}
              autoWidth={df1State.autoWidth}
              autoHeight={df1State.autoHeight}
              width={df1State.width}
              height={df1State.height}
              visible={df1State.visible}
              numberOfColumns={df1State.numberOfColumns}
              columnWidth={df1State.columnWidth}
              autoFocus={df1State.autoFocus}
              captionType={df1State.captionType}
              itemChanged={df1State.itemChanged}
              defaultColumnWidthFlag={df1State.defaultColumnWidthFlag}
              addExtraProperties={df1State.addExtraProperties}
              canBeHidden={df1State.canBeHidden}
              title={df1State.title}
            >
              <TextField
                id={txtCusIdState.id}
                showTitle={txtCusIdState.showTitle}
                title={txtCusIdState.title}
                captionType={txtCusIdState.captionType}
                showTitleAsLink={txtCusIdState.showTitleAsLink}
                width={txtCusIdState.width}
                visible={txtCusIdState.visible}
                enabled={txtCusIdState.enabled}
                setFilterInputText={txtCusIdState.setFilterInputText}
                columnSpan={txtCusIdState.columnSpan}
                characterCasing={txtCusIdState.characterCasing}
                stringLength={txtCusIdState.stringLength}
                mandatory={txtCusIdState.mandatory}
                startRow={txtCusIdState.startRow}
                endRow={txtCusIdState.endRow}
                showFontIconOnlyInTitle={txtCusIdState.showFontIconOnlyInTitle}
                fontIconAlignment={txtCusIdState.fontIconAlignment}
                type={txtCusIdState.type}
                focusIn={txtCusIdState.focusIn}
                onBlurEvent={txtCusIdState.onBlurEvent}
                addExtraProperties={txtCusIdState.addExtraProperties}
                disabledStyle={txtCusIdState.disabledStyle}
                canBeHidden={txtCusIdState.canBeHidden}
                
              ></TextField>
              <TextField
                id={txtCusNmState.id}
                showTitle={txtCusNmState.showTitle}
                title={txtCusNmState.title}
                captionType={txtCusNmState.captionType}
                showTitleAsLink={txtCusNmState.showTitleAsLink}
                width={txtCusNmState.width}
                visible={txtCusNmState.visible}
                enabled={txtCusNmState.enabled}
                setFilterInputText={txtCusNmState.setFilterInputText}
                columnSpan={txtCusNmState.columnSpan}
                characterCasing={txtCusNmState.characterCasing}
                stringLength={txtCusNmState.stringLength}
                mandatory={txtCusNmState.mandatory}
                startRow={txtCusNmState.startRow}
                endRow={txtCusNmState.endRow}
                showFontIconOnlyInTitle={txtCusNmState.showFontIconOnlyInTitle}
                fontIconAlignment={txtCusNmState.fontIconAlignment}
                type={txtCusNmState.type}
                focusIn={txtCusNmState.focusIn}
                onBlurEvent={txtCusNmState.onBlurEvent}
                addExtraProperties={txtCusNmState.addExtraProperties}
                disabledStyle={txtCusNmState.disabledStyle}
                canBeHidden={txtCusNmState.canBeHidden}
              ></TextField>
            </Form>
            <ActionBar
              id={wbbOkBtnBarState.id}
              align={wbbOkBtnBarState.align}
              type={wbbOkBtnBarState.type}
              addExtraProperties={wbbOkBtnBarState.addExtraProperties}
              canBeHidden={wbbOkBtnBarState.canBeHidden}
              title={wbbOkBtnBarState.title}
            >
              <Button
                id={btnCmwOkState.id}
                onClick={handle_btnCmwOk}
                showTitle={btnCmwOkState.showTitle}
                title={btnCmwOkState.title}
                captionType={btnCmwOkState.captionType}
                visible={btnCmwOkState.visible}
                enabled={btnCmwOkState.enabled}
                buttonType={btnCmwOkState.buttonType}
                screenDefaultButton={btnCmwOkState.screenDefaultButton}
                isLeftSideButton={btnCmwOkState.isLeftSideButton}
                iconType={btnCmwOkState.iconType}
                showFontIconOnlyInTitle={btnCmwOkState.showFontIconOnlyInTitle}
                fontIconAlignment={btnCmwOkState.fontIconAlignment}
                fontIconClassName={btnCmwOkState.fontIconClassName}
                fontIconSize={btnCmwOkState.fontIconSize}
                allowTab={btnCmwOkState.allowTab}
                autoWidth={btnCmwOkState.autoWidth}
                width={btnCmwOkState.width}
                height={btnCmwOkState.height}
                inquiryMode={btnCmwOkState.inquiryMode}
                type1={btnCmwOkState.type1}
                addExtraProperties={btnCmwOkState.addExtraProperties}
                canBeHidden={btnCmwOkState.canBeHidden}
              ></Button>
            </ActionBar>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
