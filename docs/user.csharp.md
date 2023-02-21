# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-azuread.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-azuread.user.User"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/r/user azuread_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.user.User.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new User(Construct Scope, string Id, UserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azuread.user.UserConfig">UserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.user.User.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.user.User.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azuread.user.User.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.user.UserConfig">UserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.user.User.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.user.User.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.user.User.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.user.User.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetAccountEnabled">ResetAccountEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetAgeGroup">ResetAgeGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetBusinessPhones">ResetBusinessPhones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetCompanyName">ResetCompanyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetConsentProvidedForMinor">ResetConsentProvidedForMinor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetCostCenter">ResetCostCenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetDepartment">ResetDepartment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetDisablePasswordExpiration">ResetDisablePasswordExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetDisableStrongPassword">ResetDisableStrongPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetDivision">ResetDivision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetEmployeeId">ResetEmployeeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetEmployeeType">ResetEmployeeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetFaxNumber">ResetFaxNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetForcePasswordChange">ResetForcePasswordChange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetGivenName">ResetGivenName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetJobTitle">ResetJobTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetMail">ResetMail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetMailNickname">ResetMailNickname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetManagerId">ResetManagerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetMobilePhone">ResetMobilePhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetOfficeLocation">ResetOfficeLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetOnpremisesImmutableId">ResetOnpremisesImmutableId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetOtherMails">ResetOtherMails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetPreferredLanguage">ResetPreferredLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetShowInAddressList">ResetShowInAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetStreetAddress">ResetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetSurname">ResetSurname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetUsageLocation">ResetUsageLocation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.user.User.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.user.User.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azuread.user.User.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.user.User.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.user.User.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azuread.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.user.User.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.user.User.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.user.User.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.user.User.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.user.User.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.user.User.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.user.User.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.user.User.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.user.User.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.user.User.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.user.User.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.user.User.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.user.User.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.user.User.putTimeouts"></a>

```csharp
private void PutTimeouts(UserTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.user.User.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a>

---

##### `ResetAccountEnabled` <a name="ResetAccountEnabled" id="@cdktf/provider-azuread.user.User.resetAccountEnabled"></a>

```csharp
private void ResetAccountEnabled()
```

##### `ResetAgeGroup` <a name="ResetAgeGroup" id="@cdktf/provider-azuread.user.User.resetAgeGroup"></a>

```csharp
private void ResetAgeGroup()
```

##### `ResetBusinessPhones` <a name="ResetBusinessPhones" id="@cdktf/provider-azuread.user.User.resetBusinessPhones"></a>

```csharp
private void ResetBusinessPhones()
```

##### `ResetCity` <a name="ResetCity" id="@cdktf/provider-azuread.user.User.resetCity"></a>

```csharp
private void ResetCity()
```

##### `ResetCompanyName` <a name="ResetCompanyName" id="@cdktf/provider-azuread.user.User.resetCompanyName"></a>

```csharp
private void ResetCompanyName()
```

##### `ResetConsentProvidedForMinor` <a name="ResetConsentProvidedForMinor" id="@cdktf/provider-azuread.user.User.resetConsentProvidedForMinor"></a>

```csharp
private void ResetConsentProvidedForMinor()
```

##### `ResetCostCenter` <a name="ResetCostCenter" id="@cdktf/provider-azuread.user.User.resetCostCenter"></a>

```csharp
private void ResetCostCenter()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktf/provider-azuread.user.User.resetCountry"></a>

```csharp
private void ResetCountry()
```

##### `ResetDepartment` <a name="ResetDepartment" id="@cdktf/provider-azuread.user.User.resetDepartment"></a>

```csharp
private void ResetDepartment()
```

##### `ResetDisablePasswordExpiration` <a name="ResetDisablePasswordExpiration" id="@cdktf/provider-azuread.user.User.resetDisablePasswordExpiration"></a>

```csharp
private void ResetDisablePasswordExpiration()
```

##### `ResetDisableStrongPassword` <a name="ResetDisableStrongPassword" id="@cdktf/provider-azuread.user.User.resetDisableStrongPassword"></a>

```csharp
private void ResetDisableStrongPassword()
```

##### `ResetDivision` <a name="ResetDivision" id="@cdktf/provider-azuread.user.User.resetDivision"></a>

```csharp
private void ResetDivision()
```

##### `ResetEmployeeId` <a name="ResetEmployeeId" id="@cdktf/provider-azuread.user.User.resetEmployeeId"></a>

```csharp
private void ResetEmployeeId()
```

##### `ResetEmployeeType` <a name="ResetEmployeeType" id="@cdktf/provider-azuread.user.User.resetEmployeeType"></a>

```csharp
private void ResetEmployeeType()
```

##### `ResetFaxNumber` <a name="ResetFaxNumber" id="@cdktf/provider-azuread.user.User.resetFaxNumber"></a>

```csharp
private void ResetFaxNumber()
```

##### `ResetForcePasswordChange` <a name="ResetForcePasswordChange" id="@cdktf/provider-azuread.user.User.resetForcePasswordChange"></a>

```csharp
private void ResetForcePasswordChange()
```

##### `ResetGivenName` <a name="ResetGivenName" id="@cdktf/provider-azuread.user.User.resetGivenName"></a>

```csharp
private void ResetGivenName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.user.User.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetJobTitle` <a name="ResetJobTitle" id="@cdktf/provider-azuread.user.User.resetJobTitle"></a>

```csharp
private void ResetJobTitle()
```

##### `ResetMail` <a name="ResetMail" id="@cdktf/provider-azuread.user.User.resetMail"></a>

```csharp
private void ResetMail()
```

##### `ResetMailNickname` <a name="ResetMailNickname" id="@cdktf/provider-azuread.user.User.resetMailNickname"></a>

```csharp
private void ResetMailNickname()
```

##### `ResetManagerId` <a name="ResetManagerId" id="@cdktf/provider-azuread.user.User.resetManagerId"></a>

```csharp
private void ResetManagerId()
```

##### `ResetMobilePhone` <a name="ResetMobilePhone" id="@cdktf/provider-azuread.user.User.resetMobilePhone"></a>

```csharp
private void ResetMobilePhone()
```

##### `ResetOfficeLocation` <a name="ResetOfficeLocation" id="@cdktf/provider-azuread.user.User.resetOfficeLocation"></a>

```csharp
private void ResetOfficeLocation()
```

##### `ResetOnpremisesImmutableId` <a name="ResetOnpremisesImmutableId" id="@cdktf/provider-azuread.user.User.resetOnpremisesImmutableId"></a>

```csharp
private void ResetOnpremisesImmutableId()
```

##### `ResetOtherMails` <a name="ResetOtherMails" id="@cdktf/provider-azuread.user.User.resetOtherMails"></a>

```csharp
private void ResetOtherMails()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azuread.user.User.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-azuread.user.User.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetPreferredLanguage` <a name="ResetPreferredLanguage" id="@cdktf/provider-azuread.user.User.resetPreferredLanguage"></a>

```csharp
private void ResetPreferredLanguage()
```

##### `ResetShowInAddressList` <a name="ResetShowInAddressList" id="@cdktf/provider-azuread.user.User.resetShowInAddressList"></a>

```csharp
private void ResetShowInAddressList()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-azuread.user.User.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetStreetAddress` <a name="ResetStreetAddress" id="@cdktf/provider-azuread.user.User.resetStreetAddress"></a>

```csharp
private void ResetStreetAddress()
```

##### `ResetSurname` <a name="ResetSurname" id="@cdktf/provider-azuread.user.User.resetSurname"></a>

```csharp
private void ResetSurname()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.user.User.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUsageLocation` <a name="ResetUsageLocation" id="@cdktf/provider-azuread.user.User.resetUsageLocation"></a>

```csharp
private void ResetUsageLocation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.user.User.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.user.User.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

User.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.user.User.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.user.User.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

User.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.user.User.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.user.User.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

User.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.user.User.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.user.User.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.aboutMe">AboutMe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.creationType">CreationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.externalUserState">ExternalUserState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.imAddresses">ImAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesDistinguishedName">OnpremisesDistinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesDomainName">OnpremisesDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesSamAccountName">OnpremisesSamAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesSecurityIdentifier">OnpremisesSecurityIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesSyncEnabled">OnpremisesSyncEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesUserPrincipalName">OnpremisesUserPrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.proxyAddresses">ProxyAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference">UserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.userType">UserType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.accountEnabledInput">AccountEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.ageGroupInput">AgeGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.businessPhonesInput">BusinessPhonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.cityInput">CityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.companyNameInput">CompanyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.consentProvidedForMinorInput">ConsentProvidedForMinorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.costCenterInput">CostCenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.countryInput">CountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.departmentInput">DepartmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.disablePasswordExpirationInput">DisablePasswordExpirationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.disableStrongPasswordInput">DisableStrongPasswordInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.divisionInput">DivisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeIdInput">EmployeeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeTypeInput">EmployeeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.faxNumberInput">FaxNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.forcePasswordChangeInput">ForcePasswordChangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.givenNameInput">GivenNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.jobTitleInput">JobTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mailInput">MailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mailNicknameInput">MailNicknameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.managerIdInput">ManagerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mobilePhoneInput">MobilePhoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.officeLocationInput">OfficeLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesImmutableIdInput">OnpremisesImmutableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.otherMailsInput">OtherMailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.preferredLanguageInput">PreferredLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.showInAddressListInput">ShowInAddressListInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.streetAddressInput">StreetAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.surnameInput">SurnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.usageLocationInput">UsageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.userPrincipalNameInput">UserPrincipalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.accountEnabled">AccountEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.ageGroup">AgeGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.businessPhones">BusinessPhones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.companyName">CompanyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.consentProvidedForMinor">ConsentProvidedForMinor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.costCenter">CostCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.department">Department</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.disablePasswordExpiration">DisablePasswordExpiration</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.disableStrongPassword">DisableStrongPassword</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.division">Division</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeId">EmployeeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeType">EmployeeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.faxNumber">FaxNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.forcePasswordChange">ForcePasswordChange</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.givenName">GivenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.jobTitle">JobTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mail">Mail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mailNickname">MailNickname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.managerId">ManagerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mobilePhone">MobilePhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.officeLocation">OfficeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesImmutableId">OnpremisesImmutableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.otherMails">OtherMails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.preferredLanguage">PreferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.showInAddressList">ShowInAddressList</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.streetAddress">StreetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.surname">Surname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.usageLocation">UsageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.userPrincipalName">UserPrincipalName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.user.User.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.user.User.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.user.User.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.user.User.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.user.User.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.user.User.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.user.User.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.user.User.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.user.User.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.user.User.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.user.User.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.user.User.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.user.User.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.user.User.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AboutMe`<sup>Required</sup> <a name="AboutMe" id="@cdktf/provider-azuread.user.User.property.aboutMe"></a>

```csharp
public string AboutMe { get; }
```

- *Type:* string

---

##### `CreationType`<sup>Required</sup> <a name="CreationType" id="@cdktf/provider-azuread.user.User.property.creationType"></a>

```csharp
public string CreationType { get; }
```

- *Type:* string

---

##### `ExternalUserState`<sup>Required</sup> <a name="ExternalUserState" id="@cdktf/provider-azuread.user.User.property.externalUserState"></a>

```csharp
public string ExternalUserState { get; }
```

- *Type:* string

---

##### `ImAddresses`<sup>Required</sup> <a name="ImAddresses" id="@cdktf/provider-azuread.user.User.property.imAddresses"></a>

```csharp
public string[] ImAddresses { get; }
```

- *Type:* string[]

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azuread.user.User.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `OnpremisesDistinguishedName`<sup>Required</sup> <a name="OnpremisesDistinguishedName" id="@cdktf/provider-azuread.user.User.property.onpremisesDistinguishedName"></a>

```csharp
public string OnpremisesDistinguishedName { get; }
```

- *Type:* string

---

##### `OnpremisesDomainName`<sup>Required</sup> <a name="OnpremisesDomainName" id="@cdktf/provider-azuread.user.User.property.onpremisesDomainName"></a>

```csharp
public string OnpremisesDomainName { get; }
```

- *Type:* string

---

##### `OnpremisesSamAccountName`<sup>Required</sup> <a name="OnpremisesSamAccountName" id="@cdktf/provider-azuread.user.User.property.onpremisesSamAccountName"></a>

```csharp
public string OnpremisesSamAccountName { get; }
```

- *Type:* string

---

##### `OnpremisesSecurityIdentifier`<sup>Required</sup> <a name="OnpremisesSecurityIdentifier" id="@cdktf/provider-azuread.user.User.property.onpremisesSecurityIdentifier"></a>

```csharp
public string OnpremisesSecurityIdentifier { get; }
```

- *Type:* string

---

##### `OnpremisesSyncEnabled`<sup>Required</sup> <a name="OnpremisesSyncEnabled" id="@cdktf/provider-azuread.user.User.property.onpremisesSyncEnabled"></a>

```csharp
public IResolvable OnpremisesSyncEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OnpremisesUserPrincipalName`<sup>Required</sup> <a name="OnpremisesUserPrincipalName" id="@cdktf/provider-azuread.user.User.property.onpremisesUserPrincipalName"></a>

```csharp
public string OnpremisesUserPrincipalName { get; }
```

- *Type:* string

---

##### `ProxyAddresses`<sup>Required</sup> <a name="ProxyAddresses" id="@cdktf/provider-azuread.user.User.property.proxyAddresses"></a>

```csharp
public string[] ProxyAddresses { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.user.User.property.timeouts"></a>

```csharp
public UserTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference">UserTimeoutsOutputReference</a>

---

##### `UserType`<sup>Required</sup> <a name="UserType" id="@cdktf/provider-azuread.user.User.property.userType"></a>

```csharp
public string UserType { get; }
```

- *Type:* string

---

##### `AccountEnabledInput`<sup>Optional</sup> <a name="AccountEnabledInput" id="@cdktf/provider-azuread.user.User.property.accountEnabledInput"></a>

```csharp
public object AccountEnabledInput { get; }
```

- *Type:* object

---

##### `AgeGroupInput`<sup>Optional</sup> <a name="AgeGroupInput" id="@cdktf/provider-azuread.user.User.property.ageGroupInput"></a>

```csharp
public string AgeGroupInput { get; }
```

- *Type:* string

---

##### `BusinessPhonesInput`<sup>Optional</sup> <a name="BusinessPhonesInput" id="@cdktf/provider-azuread.user.User.property.businessPhonesInput"></a>

```csharp
public string[] BusinessPhonesInput { get; }
```

- *Type:* string[]

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-azuread.user.User.property.cityInput"></a>

```csharp
public string CityInput { get; }
```

- *Type:* string

---

##### `CompanyNameInput`<sup>Optional</sup> <a name="CompanyNameInput" id="@cdktf/provider-azuread.user.User.property.companyNameInput"></a>

```csharp
public string CompanyNameInput { get; }
```

- *Type:* string

---

##### `ConsentProvidedForMinorInput`<sup>Optional</sup> <a name="ConsentProvidedForMinorInput" id="@cdktf/provider-azuread.user.User.property.consentProvidedForMinorInput"></a>

```csharp
public string ConsentProvidedForMinorInput { get; }
```

- *Type:* string

---

##### `CostCenterInput`<sup>Optional</sup> <a name="CostCenterInput" id="@cdktf/provider-azuread.user.User.property.costCenterInput"></a>

```csharp
public string CostCenterInput { get; }
```

- *Type:* string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktf/provider-azuread.user.User.property.countryInput"></a>

```csharp
public string CountryInput { get; }
```

- *Type:* string

---

##### `DepartmentInput`<sup>Optional</sup> <a name="DepartmentInput" id="@cdktf/provider-azuread.user.User.property.departmentInput"></a>

```csharp
public string DepartmentInput { get; }
```

- *Type:* string

---

##### `DisablePasswordExpirationInput`<sup>Optional</sup> <a name="DisablePasswordExpirationInput" id="@cdktf/provider-azuread.user.User.property.disablePasswordExpirationInput"></a>

```csharp
public object DisablePasswordExpirationInput { get; }
```

- *Type:* object

---

##### `DisableStrongPasswordInput`<sup>Optional</sup> <a name="DisableStrongPasswordInput" id="@cdktf/provider-azuread.user.User.property.disableStrongPasswordInput"></a>

```csharp
public object DisableStrongPasswordInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azuread.user.User.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DivisionInput`<sup>Optional</sup> <a name="DivisionInput" id="@cdktf/provider-azuread.user.User.property.divisionInput"></a>

```csharp
public string DivisionInput { get; }
```

- *Type:* string

---

##### `EmployeeIdInput`<sup>Optional</sup> <a name="EmployeeIdInput" id="@cdktf/provider-azuread.user.User.property.employeeIdInput"></a>

```csharp
public string EmployeeIdInput { get; }
```

- *Type:* string

---

##### `EmployeeTypeInput`<sup>Optional</sup> <a name="EmployeeTypeInput" id="@cdktf/provider-azuread.user.User.property.employeeTypeInput"></a>

```csharp
public string EmployeeTypeInput { get; }
```

- *Type:* string

---

##### `FaxNumberInput`<sup>Optional</sup> <a name="FaxNumberInput" id="@cdktf/provider-azuread.user.User.property.faxNumberInput"></a>

```csharp
public string FaxNumberInput { get; }
```

- *Type:* string

---

##### `ForcePasswordChangeInput`<sup>Optional</sup> <a name="ForcePasswordChangeInput" id="@cdktf/provider-azuread.user.User.property.forcePasswordChangeInput"></a>

```csharp
public object ForcePasswordChangeInput { get; }
```

- *Type:* object

---

##### `GivenNameInput`<sup>Optional</sup> <a name="GivenNameInput" id="@cdktf/provider-azuread.user.User.property.givenNameInput"></a>

```csharp
public string GivenNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.user.User.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JobTitleInput`<sup>Optional</sup> <a name="JobTitleInput" id="@cdktf/provider-azuread.user.User.property.jobTitleInput"></a>

```csharp
public string JobTitleInput { get; }
```

- *Type:* string

---

##### `MailInput`<sup>Optional</sup> <a name="MailInput" id="@cdktf/provider-azuread.user.User.property.mailInput"></a>

```csharp
public string MailInput { get; }
```

- *Type:* string

---

##### `MailNicknameInput`<sup>Optional</sup> <a name="MailNicknameInput" id="@cdktf/provider-azuread.user.User.property.mailNicknameInput"></a>

```csharp
public string MailNicknameInput { get; }
```

- *Type:* string

---

##### `ManagerIdInput`<sup>Optional</sup> <a name="ManagerIdInput" id="@cdktf/provider-azuread.user.User.property.managerIdInput"></a>

```csharp
public string ManagerIdInput { get; }
```

- *Type:* string

---

##### `MobilePhoneInput`<sup>Optional</sup> <a name="MobilePhoneInput" id="@cdktf/provider-azuread.user.User.property.mobilePhoneInput"></a>

```csharp
public string MobilePhoneInput { get; }
```

- *Type:* string

---

##### `OfficeLocationInput`<sup>Optional</sup> <a name="OfficeLocationInput" id="@cdktf/provider-azuread.user.User.property.officeLocationInput"></a>

```csharp
public string OfficeLocationInput { get; }
```

- *Type:* string

---

##### `OnpremisesImmutableIdInput`<sup>Optional</sup> <a name="OnpremisesImmutableIdInput" id="@cdktf/provider-azuread.user.User.property.onpremisesImmutableIdInput"></a>

```csharp
public string OnpremisesImmutableIdInput { get; }
```

- *Type:* string

---

##### `OtherMailsInput`<sup>Optional</sup> <a name="OtherMailsInput" id="@cdktf/provider-azuread.user.User.property.otherMailsInput"></a>

```csharp
public string[] OtherMailsInput { get; }
```

- *Type:* string[]

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azuread.user.User.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-azuread.user.User.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `PreferredLanguageInput`<sup>Optional</sup> <a name="PreferredLanguageInput" id="@cdktf/provider-azuread.user.User.property.preferredLanguageInput"></a>

```csharp
public string PreferredLanguageInput { get; }
```

- *Type:* string

---

##### `ShowInAddressListInput`<sup>Optional</sup> <a name="ShowInAddressListInput" id="@cdktf/provider-azuread.user.User.property.showInAddressListInput"></a>

```csharp
public object ShowInAddressListInput { get; }
```

- *Type:* object

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-azuread.user.User.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `StreetAddressInput`<sup>Optional</sup> <a name="StreetAddressInput" id="@cdktf/provider-azuread.user.User.property.streetAddressInput"></a>

```csharp
public string StreetAddressInput { get; }
```

- *Type:* string

---

##### `SurnameInput`<sup>Optional</sup> <a name="SurnameInput" id="@cdktf/provider-azuread.user.User.property.surnameInput"></a>

```csharp
public string SurnameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.user.User.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UsageLocationInput`<sup>Optional</sup> <a name="UsageLocationInput" id="@cdktf/provider-azuread.user.User.property.usageLocationInput"></a>

```csharp
public string UsageLocationInput { get; }
```

- *Type:* string

---

##### `UserPrincipalNameInput`<sup>Optional</sup> <a name="UserPrincipalNameInput" id="@cdktf/provider-azuread.user.User.property.userPrincipalNameInput"></a>

```csharp
public string UserPrincipalNameInput { get; }
```

- *Type:* string

---

##### `AccountEnabled`<sup>Required</sup> <a name="AccountEnabled" id="@cdktf/provider-azuread.user.User.property.accountEnabled"></a>

```csharp
public object AccountEnabled { get; }
```

- *Type:* object

---

##### `AgeGroup`<sup>Required</sup> <a name="AgeGroup" id="@cdktf/provider-azuread.user.User.property.ageGroup"></a>

```csharp
public string AgeGroup { get; }
```

- *Type:* string

---

##### `BusinessPhones`<sup>Required</sup> <a name="BusinessPhones" id="@cdktf/provider-azuread.user.User.property.businessPhones"></a>

```csharp
public string[] BusinessPhones { get; }
```

- *Type:* string[]

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-azuread.user.User.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="@cdktf/provider-azuread.user.User.property.companyName"></a>

```csharp
public string CompanyName { get; }
```

- *Type:* string

---

##### `ConsentProvidedForMinor`<sup>Required</sup> <a name="ConsentProvidedForMinor" id="@cdktf/provider-azuread.user.User.property.consentProvidedForMinor"></a>

```csharp
public string ConsentProvidedForMinor { get; }
```

- *Type:* string

---

##### `CostCenter`<sup>Required</sup> <a name="CostCenter" id="@cdktf/provider-azuread.user.User.property.costCenter"></a>

```csharp
public string CostCenter { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-azuread.user.User.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `Department`<sup>Required</sup> <a name="Department" id="@cdktf/provider-azuread.user.User.property.department"></a>

```csharp
public string Department { get; }
```

- *Type:* string

---

##### `DisablePasswordExpiration`<sup>Required</sup> <a name="DisablePasswordExpiration" id="@cdktf/provider-azuread.user.User.property.disablePasswordExpiration"></a>

```csharp
public object DisablePasswordExpiration { get; }
```

- *Type:* object

---

##### `DisableStrongPassword`<sup>Required</sup> <a name="DisableStrongPassword" id="@cdktf/provider-azuread.user.User.property.disableStrongPassword"></a>

```csharp
public object DisableStrongPassword { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.user.User.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Division`<sup>Required</sup> <a name="Division" id="@cdktf/provider-azuread.user.User.property.division"></a>

```csharp
public string Division { get; }
```

- *Type:* string

---

##### `EmployeeId`<sup>Required</sup> <a name="EmployeeId" id="@cdktf/provider-azuread.user.User.property.employeeId"></a>

```csharp
public string EmployeeId { get; }
```

- *Type:* string

---

##### `EmployeeType`<sup>Required</sup> <a name="EmployeeType" id="@cdktf/provider-azuread.user.User.property.employeeType"></a>

```csharp
public string EmployeeType { get; }
```

- *Type:* string

---

##### `FaxNumber`<sup>Required</sup> <a name="FaxNumber" id="@cdktf/provider-azuread.user.User.property.faxNumber"></a>

```csharp
public string FaxNumber { get; }
```

- *Type:* string

---

##### `ForcePasswordChange`<sup>Required</sup> <a name="ForcePasswordChange" id="@cdktf/provider-azuread.user.User.property.forcePasswordChange"></a>

```csharp
public object ForcePasswordChange { get; }
```

- *Type:* object

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="@cdktf/provider-azuread.user.User.property.givenName"></a>

```csharp
public string GivenName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.user.User.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JobTitle`<sup>Required</sup> <a name="JobTitle" id="@cdktf/provider-azuread.user.User.property.jobTitle"></a>

```csharp
public string JobTitle { get; }
```

- *Type:* string

---

##### `Mail`<sup>Required</sup> <a name="Mail" id="@cdktf/provider-azuread.user.User.property.mail"></a>

```csharp
public string Mail { get; }
```

- *Type:* string

---

##### `MailNickname`<sup>Required</sup> <a name="MailNickname" id="@cdktf/provider-azuread.user.User.property.mailNickname"></a>

```csharp
public string MailNickname { get; }
```

- *Type:* string

---

##### `ManagerId`<sup>Required</sup> <a name="ManagerId" id="@cdktf/provider-azuread.user.User.property.managerId"></a>

```csharp
public string ManagerId { get; }
```

- *Type:* string

---

##### `MobilePhone`<sup>Required</sup> <a name="MobilePhone" id="@cdktf/provider-azuread.user.User.property.mobilePhone"></a>

```csharp
public string MobilePhone { get; }
```

- *Type:* string

---

##### `OfficeLocation`<sup>Required</sup> <a name="OfficeLocation" id="@cdktf/provider-azuread.user.User.property.officeLocation"></a>

```csharp
public string OfficeLocation { get; }
```

- *Type:* string

---

##### `OnpremisesImmutableId`<sup>Required</sup> <a name="OnpremisesImmutableId" id="@cdktf/provider-azuread.user.User.property.onpremisesImmutableId"></a>

```csharp
public string OnpremisesImmutableId { get; }
```

- *Type:* string

---

##### `OtherMails`<sup>Required</sup> <a name="OtherMails" id="@cdktf/provider-azuread.user.User.property.otherMails"></a>

```csharp
public string[] OtherMails { get; }
```

- *Type:* string[]

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azuread.user.User.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-azuread.user.User.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="@cdktf/provider-azuread.user.User.property.preferredLanguage"></a>

```csharp
public string PreferredLanguage { get; }
```

- *Type:* string

---

##### `ShowInAddressList`<sup>Required</sup> <a name="ShowInAddressList" id="@cdktf/provider-azuread.user.User.property.showInAddressList"></a>

```csharp
public object ShowInAddressList { get; }
```

- *Type:* object

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-azuread.user.User.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StreetAddress`<sup>Required</sup> <a name="StreetAddress" id="@cdktf/provider-azuread.user.User.property.streetAddress"></a>

```csharp
public string StreetAddress { get; }
```

- *Type:* string

---

##### `Surname`<sup>Required</sup> <a name="Surname" id="@cdktf/provider-azuread.user.User.property.surname"></a>

```csharp
public string Surname { get; }
```

- *Type:* string

---

##### `UsageLocation`<sup>Required</sup> <a name="UsageLocation" id="@cdktf/provider-azuread.user.User.property.usageLocation"></a>

```csharp
public string UsageLocation { get; }
```

- *Type:* string

---

##### `UserPrincipalName`<sup>Required</sup> <a name="UserPrincipalName" id="@cdktf/provider-azuread.user.User.property.userPrincipalName"></a>

```csharp
public string UserPrincipalName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.user.User.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-azuread.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.user.UserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new UserConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string UserPrincipalName,
    object AccountEnabled = null,
    string AgeGroup = null,
    string[] BusinessPhones = null,
    string City = null,
    string CompanyName = null,
    string ConsentProvidedForMinor = null,
    string CostCenter = null,
    string Country = null,
    string Department = null,
    object DisablePasswordExpiration = null,
    object DisableStrongPassword = null,
    string Division = null,
    string EmployeeId = null,
    string EmployeeType = null,
    string FaxNumber = null,
    object ForcePasswordChange = null,
    string GivenName = null,
    string Id = null,
    string JobTitle = null,
    string Mail = null,
    string MailNickname = null,
    string ManagerId = null,
    string MobilePhone = null,
    string OfficeLocation = null,
    string OnpremisesImmutableId = null,
    string[] OtherMails = null,
    string Password = null,
    string PostalCode = null,
    string PreferredLanguage = null,
    object ShowInAddressList = null,
    string State = null,
    string StreetAddress = null,
    string Surname = null,
    UserTimeouts Timeouts = null,
    string UsageLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The name to display in the address book for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.userPrincipalName">UserPrincipalName</a></code> | <code>string</code> | The user principal name (UPN) of the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.accountEnabled">AccountEnabled</a></code> | <code>object</code> | Whether or not the account should be enabled. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.ageGroup">AgeGroup</a></code> | <code>string</code> | The age group of the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.businessPhones">BusinessPhones</a></code> | <code>string[]</code> | The telephone numbers for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.city">City</a></code> | <code>string</code> | The city in which the user is located. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.companyName">CompanyName</a></code> | <code>string</code> | The company name which the user is associated. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.consentProvidedForMinor">ConsentProvidedForMinor</a></code> | <code>string</code> | Whether consent has been obtained for minors. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.costCenter">CostCenter</a></code> | <code>string</code> | The cost center associated with the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.country">Country</a></code> | <code>string</code> | The country/region in which the user is located, e.g. `US` or `UK`. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.department">Department</a></code> | <code>string</code> | The name for the department in which the user works. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.disablePasswordExpiration">DisablePasswordExpiration</a></code> | <code>object</code> | Whether the users password is exempt from expiring. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.disableStrongPassword">DisableStrongPassword</a></code> | <code>object</code> | Whether the user is allowed weaker passwords than the default policy to be specified. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.division">Division</a></code> | <code>string</code> | The name of the division in which the user works. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.employeeId">EmployeeId</a></code> | <code>string</code> | The employee identifier assigned to the user by the organisation. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.employeeType">EmployeeType</a></code> | <code>string</code> | Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.faxNumber">FaxNumber</a></code> | <code>string</code> | The fax number of the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.forcePasswordChange">ForcePasswordChange</a></code> | <code>object</code> | Whether the user is forced to change the password during the next sign-in. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.givenName">GivenName</a></code> | <code>string</code> | The given name (first name) of the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#id User#id}. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.jobTitle">JobTitle</a></code> | <code>string</code> | The user’s job title. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.mail">Mail</a></code> | <code>string</code> | The SMTP address for the user. Cannot be unset. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.mailNickname">MailNickname</a></code> | <code>string</code> | The mail alias for the user. Defaults to the user name part of the user principal name (UPN). |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.managerId">ManagerId</a></code> | <code>string</code> | The object ID of the user's manager. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.mobilePhone">MobilePhone</a></code> | <code>string</code> | The primary cellular telephone number for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.officeLocation">OfficeLocation</a></code> | <code>string</code> | The office location in the user's place of business. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.onpremisesImmutableId">OnpremisesImmutableId</a></code> | <code>string</code> | The value used to associate an on-premise Active Directory user account with their Azure AD user object. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.otherMails">OtherMails</a></code> | <code>string[]</code> | Additional email addresses for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.password">Password</a></code> | <code>string</code> | The password for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.postalCode">PostalCode</a></code> | <code>string</code> | The postal code for the user's postal address. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.preferredLanguage">PreferredLanguage</a></code> | <code>string</code> | The user's preferred language, in ISO 639-1 notation. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.showInAddressList">ShowInAddressList</a></code> | <code>object</code> | Whether or not the Outlook global address list should include this user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.state">State</a></code> | <code>string</code> | The state or province in the user's address. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.streetAddress">StreetAddress</a></code> | <code>string</code> | The street address of the user's place of business. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.surname">Surname</a></code> | <code>string</code> | The user's surname (family name or last name). |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.usageLocation">UsageLocation</a></code> | <code>string</code> | The usage location of the user. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.user.UserConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.user.UserConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.user.UserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.user.UserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.user.UserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.user.UserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.user.UserConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.user.UserConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The name to display in the address book for the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#display_name User#display_name}

---

##### `UserPrincipalName`<sup>Required</sup> <a name="UserPrincipalName" id="@cdktf/provider-azuread.user.UserConfig.property.userPrincipalName"></a>

```csharp
public string UserPrincipalName { get; set; }
```

- *Type:* string

The user principal name (UPN) of the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#user_principal_name User#user_principal_name}

---

##### `AccountEnabled`<sup>Optional</sup> <a name="AccountEnabled" id="@cdktf/provider-azuread.user.UserConfig.property.accountEnabled"></a>

```csharp
public object AccountEnabled { get; set; }
```

- *Type:* object

Whether or not the account should be enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#account_enabled User#account_enabled}

---

##### `AgeGroup`<sup>Optional</sup> <a name="AgeGroup" id="@cdktf/provider-azuread.user.UserConfig.property.ageGroup"></a>

```csharp
public string AgeGroup { get; set; }
```

- *Type:* string

The age group of the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#age_group User#age_group}

---

##### `BusinessPhones`<sup>Optional</sup> <a name="BusinessPhones" id="@cdktf/provider-azuread.user.UserConfig.property.businessPhones"></a>

```csharp
public string[] BusinessPhones { get; set; }
```

- *Type:* string[]

The telephone numbers for the user.

Only one number can be set for this property. Read-only for users synced with Azure AD Connect

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#business_phones User#business_phones}

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktf/provider-azuread.user.UserConfig.property.city"></a>

```csharp
public string City { get; set; }
```

- *Type:* string

The city in which the user is located.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#city User#city}

---

##### `CompanyName`<sup>Optional</sup> <a name="CompanyName" id="@cdktf/provider-azuread.user.UserConfig.property.companyName"></a>

```csharp
public string CompanyName { get; set; }
```

- *Type:* string

The company name which the user is associated.

This property can be useful for describing the company that an external user comes from

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#company_name User#company_name}

---

##### `ConsentProvidedForMinor`<sup>Optional</sup> <a name="ConsentProvidedForMinor" id="@cdktf/provider-azuread.user.UserConfig.property.consentProvidedForMinor"></a>

```csharp
public string ConsentProvidedForMinor { get; set; }
```

- *Type:* string

Whether consent has been obtained for minors.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#consent_provided_for_minor User#consent_provided_for_minor}

---

##### `CostCenter`<sup>Optional</sup> <a name="CostCenter" id="@cdktf/provider-azuread.user.UserConfig.property.costCenter"></a>

```csharp
public string CostCenter { get; set; }
```

- *Type:* string

The cost center associated with the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#cost_center User#cost_center}

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktf/provider-azuread.user.UserConfig.property.country"></a>

```csharp
public string Country { get; set; }
```

- *Type:* string

The country/region in which the user is located, e.g. `US` or `UK`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#country User#country}

---

##### `Department`<sup>Optional</sup> <a name="Department" id="@cdktf/provider-azuread.user.UserConfig.property.department"></a>

```csharp
public string Department { get; set; }
```

- *Type:* string

The name for the department in which the user works.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#department User#department}

---

##### `DisablePasswordExpiration`<sup>Optional</sup> <a name="DisablePasswordExpiration" id="@cdktf/provider-azuread.user.UserConfig.property.disablePasswordExpiration"></a>

```csharp
public object DisablePasswordExpiration { get; set; }
```

- *Type:* object

Whether the users password is exempt from expiring.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#disable_password_expiration User#disable_password_expiration}

---

##### `DisableStrongPassword`<sup>Optional</sup> <a name="DisableStrongPassword" id="@cdktf/provider-azuread.user.UserConfig.property.disableStrongPassword"></a>

```csharp
public object DisableStrongPassword { get; set; }
```

- *Type:* object

Whether the user is allowed weaker passwords than the default policy to be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#disable_strong_password User#disable_strong_password}

---

##### `Division`<sup>Optional</sup> <a name="Division" id="@cdktf/provider-azuread.user.UserConfig.property.division"></a>

```csharp
public string Division { get; set; }
```

- *Type:* string

The name of the division in which the user works.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#division User#division}

---

##### `EmployeeId`<sup>Optional</sup> <a name="EmployeeId" id="@cdktf/provider-azuread.user.UserConfig.property.employeeId"></a>

```csharp
public string EmployeeId { get; set; }
```

- *Type:* string

The employee identifier assigned to the user by the organisation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#employee_id User#employee_id}

---

##### `EmployeeType`<sup>Optional</sup> <a name="EmployeeType" id="@cdktf/provider-azuread.user.UserConfig.property.employeeType"></a>

```csharp
public string EmployeeType { get; set; }
```

- *Type:* string

Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#employee_type User#employee_type}

---

##### `FaxNumber`<sup>Optional</sup> <a name="FaxNumber" id="@cdktf/provider-azuread.user.UserConfig.property.faxNumber"></a>

```csharp
public string FaxNumber { get; set; }
```

- *Type:* string

The fax number of the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#fax_number User#fax_number}

---

##### `ForcePasswordChange`<sup>Optional</sup> <a name="ForcePasswordChange" id="@cdktf/provider-azuread.user.UserConfig.property.forcePasswordChange"></a>

```csharp
public object ForcePasswordChange { get; set; }
```

- *Type:* object

Whether the user is forced to change the password during the next sign-in.

Only takes effect when also changing the password

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#force_password_change User#force_password_change}

---

##### `GivenName`<sup>Optional</sup> <a name="GivenName" id="@cdktf/provider-azuread.user.UserConfig.property.givenName"></a>

```csharp
public string GivenName { get; set; }
```

- *Type:* string

The given name (first name) of the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#given_name User#given_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.user.UserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JobTitle`<sup>Optional</sup> <a name="JobTitle" id="@cdktf/provider-azuread.user.UserConfig.property.jobTitle"></a>

```csharp
public string JobTitle { get; set; }
```

- *Type:* string

The user’s job title.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#job_title User#job_title}

---

##### `Mail`<sup>Optional</sup> <a name="Mail" id="@cdktf/provider-azuread.user.UserConfig.property.mail"></a>

```csharp
public string Mail { get; set; }
```

- *Type:* string

The SMTP address for the user. Cannot be unset.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#mail User#mail}

---

##### `MailNickname`<sup>Optional</sup> <a name="MailNickname" id="@cdktf/provider-azuread.user.UserConfig.property.mailNickname"></a>

```csharp
public string MailNickname { get; set; }
```

- *Type:* string

The mail alias for the user. Defaults to the user name part of the user principal name (UPN).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#mail_nickname User#mail_nickname}

---

##### `ManagerId`<sup>Optional</sup> <a name="ManagerId" id="@cdktf/provider-azuread.user.UserConfig.property.managerId"></a>

```csharp
public string ManagerId { get; set; }
```

- *Type:* string

The object ID of the user's manager.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#manager_id User#manager_id}

---

##### `MobilePhone`<sup>Optional</sup> <a name="MobilePhone" id="@cdktf/provider-azuread.user.UserConfig.property.mobilePhone"></a>

```csharp
public string MobilePhone { get; set; }
```

- *Type:* string

The primary cellular telephone number for the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#mobile_phone User#mobile_phone}

---

##### `OfficeLocation`<sup>Optional</sup> <a name="OfficeLocation" id="@cdktf/provider-azuread.user.UserConfig.property.officeLocation"></a>

```csharp
public string OfficeLocation { get; set; }
```

- *Type:* string

The office location in the user's place of business.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#office_location User#office_location}

---

##### `OnpremisesImmutableId`<sup>Optional</sup> <a name="OnpremisesImmutableId" id="@cdktf/provider-azuread.user.UserConfig.property.onpremisesImmutableId"></a>

```csharp
public string OnpremisesImmutableId { get; set; }
```

- *Type:* string

The value used to associate an on-premise Active Directory user account with their Azure AD user object.

This must be specified if you are using a federated domain for the user's `user_principal_name` property when creating a new user account

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#onpremises_immutable_id User#onpremises_immutable_id}

---

##### `OtherMails`<sup>Optional</sup> <a name="OtherMails" id="@cdktf/provider-azuread.user.UserConfig.property.otherMails"></a>

```csharp
public string[] OtherMails { get; set; }
```

- *Type:* string[]

Additional email addresses for the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#other_mails User#other_mails}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azuread.user.UserConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password for the user.

The password must satisfy minimum requirements as specified by the password policy. The maximum length is 256 characters. This property is required when creating a new user

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#password User#password}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-azuread.user.UserConfig.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

The postal code for the user's postal address.

The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#postal_code User#postal_code}

---

##### `PreferredLanguage`<sup>Optional</sup> <a name="PreferredLanguage" id="@cdktf/provider-azuread.user.UserConfig.property.preferredLanguage"></a>

```csharp
public string PreferredLanguage { get; set; }
```

- *Type:* string

The user's preferred language, in ISO 639-1 notation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#preferred_language User#preferred_language}

---

##### `ShowInAddressList`<sup>Optional</sup> <a name="ShowInAddressList" id="@cdktf/provider-azuread.user.UserConfig.property.showInAddressList"></a>

```csharp
public object ShowInAddressList { get; set; }
```

- *Type:* object

Whether or not the Outlook global address list should include this user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#show_in_address_list User#show_in_address_list}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-azuread.user.UserConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

The state or province in the user's address.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#state User#state}

---

##### `StreetAddress`<sup>Optional</sup> <a name="StreetAddress" id="@cdktf/provider-azuread.user.UserConfig.property.streetAddress"></a>

```csharp
public string StreetAddress { get; set; }
```

- *Type:* string

The street address of the user's place of business.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#street_address User#street_address}

---

##### `Surname`<sup>Optional</sup> <a name="Surname" id="@cdktf/provider-azuread.user.UserConfig.property.surname"></a>

```csharp
public string Surname { get; set; }
```

- *Type:* string

The user's surname (family name or last name).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#surname User#surname}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.user.UserConfig.property.timeouts"></a>

```csharp
public UserTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#timeouts User#timeouts}

---

##### `UsageLocation`<sup>Optional</sup> <a name="UsageLocation" id="@cdktf/provider-azuread.user.UserConfig.property.usageLocation"></a>

```csharp
public string UsageLocation { get; set; }
```

- *Type:* string

The usage location of the user.

Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. The usage location is a two letter country code (ISO standard 3166). Examples include: `NO`, `JP`, and `GB`. Cannot be reset to null once set

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#usage_location User#usage_location}

---

### UserTimeouts <a name="UserTimeouts" id="@cdktf/provider-azuread.user.UserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.user.UserTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new UserTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#create User#create}. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#delete User#delete}. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#read User#read}. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#update User#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.user.UserTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#create User#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.user.UserTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#delete User#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.user.UserTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#read User#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.user.UserTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#update User#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### UserTimeoutsOutputReference <a name="UserTimeoutsOutputReference" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new UserTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



