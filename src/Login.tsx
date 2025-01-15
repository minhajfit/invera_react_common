
import Layout from './components/Layout';
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
    

export default function MyScreen({  }) {
    return (
        <>
        
<Layout id="vlMainLayout" align="Top" backGroundColor="" showBorder={false} containerType="Default" styleName="mainLayout" type1="Vertical" width="100%" height="100%" visible={true} showResizeBar={false} title="XXX-XXX" captionType="ShortLabel" addExtraProperties={false} isToolStrip={false} componentType="None" canBeHidden={false}>
    <Layout id="vl3" align="Center" backGroundColor="" showBorder={false} containerType="None" type1="Vertical" autoWidth={false} autoHeight={false} width="500" height="500" visible={true} showResizeBar={false} title="XXX-XXX" captionType="ShortLabel" addExtraProperties={false} isToolStrip={false} componentType="None" canBeHidden={false}>
    <Form id="df2" wrapTitles={false} backGroundColor="" cellBorder={true} showBorder={false} autoWidth={false} autoHeight={true} width="100%" height="30" visible={true} numberOfColumns="2" columnWidth="108,0" autoFocus={false} captionType="ShortLabel" itemChanged={false} defaultColumnWidthFlag={true} addExtraProperties={false} canBeHidden={false} title="XXX-XXX">
    <TextField id="txtName" showTitle={true} title="NAME" captionType="ShortLabel" showTitleAsLink={false} width="0" visible={true} enabled={true} setFilterInputText={false} columnSpan="1" characterCasing="None" stringLength="0" mandatory={false} startRow={false} endRow={false} showFontIconOnlyInTitle={false} fontIconAlignment="Right" type="Text" focusIn={false} onBlurEvent={false} addExtraProperties={false} disabledStyle="DEFAULT" canBeHidden={false}>
    
</TextField>
<TextField id="txtPassword" showTitle={true} title="PASSWORD" captionType="ShortLabel" showTitleAsLink={false} width="0" visible={true} enabled={true} setFilterInputText={false} columnSpan="1" characterCasing="None" stringLength="0" mandatory={false} startRow={false} endRow={false} showFontIconOnlyInTitle={false} fontIconAlignment="Right" type="Text" focusIn={false} onBlurEvent={false} addExtraProperties={false} disabledStyle="DEFAULT" canBeHidden={false}>
    
</TextField>
</Form>
<Layout id="hl4" align="Left" backGroundColor="" showBorder={false} containerType="None" type1="Horizontal" autoWidth={false} autoHeight={false} width="100%" height="50" visible={true} membersMargin="2" showResizeBar={false} title="XXX-XXX" captionType="ShortLabel" addExtraProperties={false} isToolStrip={false} componentType="None" canBeHidden={false}>
    <Button id="btnLogin" showTitle={true} title="LOGIN" captionType="ShortLabel" visible={true} enabled={true} buttonType="Default" screenDefaultButton={false} isLeftSideButton={false} iconType="Icon" showFontIconOnlyInTitle={false} fontIconAlignment="Right" allowTab={true} autoWidth={false} inquiryMode="HideInInquiry" type1="Button" addExtraProperties={false} canBeHidden={false}>
    
</Button>
<Button id="btnCancel" showTitle={true} title="CANCEL" captionType="ShortLabel" visible={true} enabled={true} buttonType="Default" screenDefaultButton={false} isLeftSideButton={false} iconType="Icon" showFontIconOnlyInTitle={false} fontIconAlignment="Right" allowTab={true} autoWidth={false} inquiryMode="HideInInquiry" type1="Button" addExtraProperties={false} canBeHidden={false}>
    
</Button>
</Layout>
</Layout>
</Layout>
        </>
    );
}