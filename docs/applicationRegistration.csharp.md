# `azuread_application_registration`

Refer to the Terraform Registory for docs: [`azuread_application_registration`](https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration).

# `applicationRegistration` Submodule <a name="`applicationRegistration` Submodule" id="@cdktf/provider-azuread.applicationRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationRegistration <a name="ApplicationRegistration" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration azuread_application_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationRegistration(Construct Scope, string Id, ApplicationRegistrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig">ApplicationRegistrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig">ApplicationRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetGroupMembershipClaims">ResetGroupMembershipClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetHomepageUrl">ResetHomepageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetImplicitAccessTokenIssuanceEnabled">ResetImplicitAccessTokenIssuanceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetImplicitIdTokenIssuanceEnabled">ResetImplicitIdTokenIssuanceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetLogoutUrl">ResetLogoutUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetMarketingUrl">ResetMarketingUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetNotes">ResetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetPrivacyStatementUrl">ResetPrivacyStatementUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetRequestedAccessTokenVersion">ResetRequestedAccessTokenVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetServiceManagementReference">ResetServiceManagementReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetSignInAudience">ResetSignInAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetSupportUrl">ResetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetTermsOfServiceUrl">ResetTermsOfServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.putTimeouts"></a>

```csharp
private void PutTimeouts(ApplicationRegistrationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGroupMembershipClaims` <a name="ResetGroupMembershipClaims" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetGroupMembershipClaims"></a>

```csharp
private void ResetGroupMembershipClaims()
```

##### `ResetHomepageUrl` <a name="ResetHomepageUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetHomepageUrl"></a>

```csharp
private void ResetHomepageUrl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImplicitAccessTokenIssuanceEnabled` <a name="ResetImplicitAccessTokenIssuanceEnabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetImplicitAccessTokenIssuanceEnabled"></a>

```csharp
private void ResetImplicitAccessTokenIssuanceEnabled()
```

##### `ResetImplicitIdTokenIssuanceEnabled` <a name="ResetImplicitIdTokenIssuanceEnabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetImplicitIdTokenIssuanceEnabled"></a>

```csharp
private void ResetImplicitIdTokenIssuanceEnabled()
```

##### `ResetLogoutUrl` <a name="ResetLogoutUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetLogoutUrl"></a>

```csharp
private void ResetLogoutUrl()
```

##### `ResetMarketingUrl` <a name="ResetMarketingUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetMarketingUrl"></a>

```csharp
private void ResetMarketingUrl()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetNotes"></a>

```csharp
private void ResetNotes()
```

##### `ResetPrivacyStatementUrl` <a name="ResetPrivacyStatementUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetPrivacyStatementUrl"></a>

```csharp
private void ResetPrivacyStatementUrl()
```

##### `ResetRequestedAccessTokenVersion` <a name="ResetRequestedAccessTokenVersion" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetRequestedAccessTokenVersion"></a>

```csharp
private void ResetRequestedAccessTokenVersion()
```

##### `ResetServiceManagementReference` <a name="ResetServiceManagementReference" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetServiceManagementReference"></a>

```csharp
private void ResetServiceManagementReference()
```

##### `ResetSignInAudience` <a name="ResetSignInAudience" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetSignInAudience"></a>

```csharp
private void ResetSignInAudience()
```

##### `ResetSupportUrl` <a name="ResetSupportUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetSupportUrl"></a>

```csharp
private void ResetSupportUrl()
```

##### `ResetTermsOfServiceUrl` <a name="ResetTermsOfServiceUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetTermsOfServiceUrl"></a>

```csharp
private void ResetTermsOfServiceUrl()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ApplicationRegistration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ApplicationRegistration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ApplicationRegistration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ApplicationRegistration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApplicationRegistration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationRegistration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.disabledByMicrosoft">DisabledByMicrosoft</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.publisherDomain">PublisherDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference">ApplicationRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.groupMembershipClaimsInput">GroupMembershipClaimsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.homepageUrlInput">HomepageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitAccessTokenIssuanceEnabledInput">ImplicitAccessTokenIssuanceEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitIdTokenIssuanceEnabledInput">ImplicitIdTokenIssuanceEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.logoutUrlInput">LogoutUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.marketingUrlInput">MarketingUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.notesInput">NotesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.privacyStatementUrlInput">PrivacyStatementUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.requestedAccessTokenVersionInput">RequestedAccessTokenVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.serviceManagementReferenceInput">ServiceManagementReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.signInAudienceInput">SignInAudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.supportUrlInput">SupportUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.termsOfServiceUrlInput">TermsOfServiceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.groupMembershipClaims">GroupMembershipClaims</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.homepageUrl">HomepageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitAccessTokenIssuanceEnabled">ImplicitAccessTokenIssuanceEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitIdTokenIssuanceEnabled">ImplicitIdTokenIssuanceEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.logoutUrl">LogoutUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.marketingUrl">MarketingUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.notes">Notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.privacyStatementUrl">PrivacyStatementUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.requestedAccessTokenVersion">RequestedAccessTokenVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.serviceManagementReference">ServiceManagementReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.signInAudience">SignInAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.supportUrl">SupportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.termsOfServiceUrl">TermsOfServiceUrl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `DisabledByMicrosoft`<sup>Required</sup> <a name="DisabledByMicrosoft" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.disabledByMicrosoft"></a>

```csharp
public string DisabledByMicrosoft { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `PublisherDomain`<sup>Required</sup> <a name="PublisherDomain" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.publisherDomain"></a>

```csharp
public string PublisherDomain { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.timeouts"></a>

```csharp
public ApplicationRegistrationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference">ApplicationRegistrationTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `GroupMembershipClaimsInput`<sup>Optional</sup> <a name="GroupMembershipClaimsInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.groupMembershipClaimsInput"></a>

```csharp
public string[] GroupMembershipClaimsInput { get; }
```

- *Type:* string[]

---

##### `HomepageUrlInput`<sup>Optional</sup> <a name="HomepageUrlInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.homepageUrlInput"></a>

```csharp
public string HomepageUrlInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImplicitAccessTokenIssuanceEnabledInput`<sup>Optional</sup> <a name="ImplicitAccessTokenIssuanceEnabledInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitAccessTokenIssuanceEnabledInput"></a>

```csharp
public object ImplicitAccessTokenIssuanceEnabledInput { get; }
```

- *Type:* object

---

##### `ImplicitIdTokenIssuanceEnabledInput`<sup>Optional</sup> <a name="ImplicitIdTokenIssuanceEnabledInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitIdTokenIssuanceEnabledInput"></a>

```csharp
public object ImplicitIdTokenIssuanceEnabledInput { get; }
```

- *Type:* object

---

##### `LogoutUrlInput`<sup>Optional</sup> <a name="LogoutUrlInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.logoutUrlInput"></a>

```csharp
public string LogoutUrlInput { get; }
```

- *Type:* string

---

##### `MarketingUrlInput`<sup>Optional</sup> <a name="MarketingUrlInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.marketingUrlInput"></a>

```csharp
public string MarketingUrlInput { get; }
```

- *Type:* string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.notesInput"></a>

```csharp
public string NotesInput { get; }
```

- *Type:* string

---

##### `PrivacyStatementUrlInput`<sup>Optional</sup> <a name="PrivacyStatementUrlInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.privacyStatementUrlInput"></a>

```csharp
public string PrivacyStatementUrlInput { get; }
```

- *Type:* string

---

##### `RequestedAccessTokenVersionInput`<sup>Optional</sup> <a name="RequestedAccessTokenVersionInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.requestedAccessTokenVersionInput"></a>

```csharp
public double RequestedAccessTokenVersionInput { get; }
```

- *Type:* double

---

##### `ServiceManagementReferenceInput`<sup>Optional</sup> <a name="ServiceManagementReferenceInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.serviceManagementReferenceInput"></a>

```csharp
public string ServiceManagementReferenceInput { get; }
```

- *Type:* string

---

##### `SignInAudienceInput`<sup>Optional</sup> <a name="SignInAudienceInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.signInAudienceInput"></a>

```csharp
public string SignInAudienceInput { get; }
```

- *Type:* string

---

##### `SupportUrlInput`<sup>Optional</sup> <a name="SupportUrlInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.supportUrlInput"></a>

```csharp
public string SupportUrlInput { get; }
```

- *Type:* string

---

##### `TermsOfServiceUrlInput`<sup>Optional</sup> <a name="TermsOfServiceUrlInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.termsOfServiceUrlInput"></a>

```csharp
public string TermsOfServiceUrlInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `GroupMembershipClaims`<sup>Required</sup> <a name="GroupMembershipClaims" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.groupMembershipClaims"></a>

```csharp
public string[] GroupMembershipClaims { get; }
```

- *Type:* string[]

---

##### `HomepageUrl`<sup>Required</sup> <a name="HomepageUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.homepageUrl"></a>

```csharp
public string HomepageUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImplicitAccessTokenIssuanceEnabled`<sup>Required</sup> <a name="ImplicitAccessTokenIssuanceEnabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitAccessTokenIssuanceEnabled"></a>

```csharp
public object ImplicitAccessTokenIssuanceEnabled { get; }
```

- *Type:* object

---

##### `ImplicitIdTokenIssuanceEnabled`<sup>Required</sup> <a name="ImplicitIdTokenIssuanceEnabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitIdTokenIssuanceEnabled"></a>

```csharp
public object ImplicitIdTokenIssuanceEnabled { get; }
```

- *Type:* object

---

##### `LogoutUrl`<sup>Required</sup> <a name="LogoutUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.logoutUrl"></a>

```csharp
public string LogoutUrl { get; }
```

- *Type:* string

---

##### `MarketingUrl`<sup>Required</sup> <a name="MarketingUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.marketingUrl"></a>

```csharp
public string MarketingUrl { get; }
```

- *Type:* string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.notes"></a>

```csharp
public string Notes { get; }
```

- *Type:* string

---

##### `PrivacyStatementUrl`<sup>Required</sup> <a name="PrivacyStatementUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.privacyStatementUrl"></a>

```csharp
public string PrivacyStatementUrl { get; }
```

- *Type:* string

---

##### `RequestedAccessTokenVersion`<sup>Required</sup> <a name="RequestedAccessTokenVersion" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.requestedAccessTokenVersion"></a>

```csharp
public double RequestedAccessTokenVersion { get; }
```

- *Type:* double

---

##### `ServiceManagementReference`<sup>Required</sup> <a name="ServiceManagementReference" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.serviceManagementReference"></a>

```csharp
public string ServiceManagementReference { get; }
```

- *Type:* string

---

##### `SignInAudience`<sup>Required</sup> <a name="SignInAudience" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.signInAudience"></a>

```csharp
public string SignInAudience { get; }
```

- *Type:* string

---

##### `SupportUrl`<sup>Required</sup> <a name="SupportUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.supportUrl"></a>

```csharp
public string SupportUrl { get; }
```

- *Type:* string

---

##### `TermsOfServiceUrl`<sup>Required</sup> <a name="TermsOfServiceUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.termsOfServiceUrl"></a>

```csharp
public string TermsOfServiceUrl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationRegistrationConfig <a name="ApplicationRegistrationConfig" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationRegistrationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string Description = null,
    string[] GroupMembershipClaims = null,
    string HomepageUrl = null,
    string Id = null,
    object ImplicitAccessTokenIssuanceEnabled = null,
    object ImplicitIdTokenIssuanceEnabled = null,
    string LogoutUrl = null,
    string MarketingUrl = null,
    string Notes = null,
    string PrivacyStatementUrl = null,
    double RequestedAccessTokenVersion = null,
    string ServiceManagementReference = null,
    string SignInAudience = null,
    string SupportUrl = null,
    string TermsOfServiceUrl = null,
    ApplicationRegistrationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.description">Description</a></code> | <code>string</code> | Description of the application as shown to end users. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.groupMembershipClaims">GroupMembershipClaims</a></code> | <code>string[]</code> | Configures the `groups` claim that the app expects issued in a user or OAuth access token. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.homepageUrl">HomepageUrl</a></code> | <code>string</code> | URL of the home page for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#id ApplicationRegistration#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.implicitAccessTokenIssuanceEnabled">ImplicitAccessTokenIssuanceEnabled</a></code> | <code>object</code> | Whether this application can request an access token using OAuth implicit flow. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.implicitIdTokenIssuanceEnabled">ImplicitIdTokenIssuanceEnabled</a></code> | <code>object</code> | Whether this application can request an ID token using OAuth implicit flow. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.logoutUrl">LogoutUrl</a></code> | <code>string</code> | URL of the logout page for the application, where the session is cleared for single sign-out. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.marketingUrl">MarketingUrl</a></code> | <code>string</code> | URL of the marketing page for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.notes">Notes</a></code> | <code>string</code> | User-specified notes relevant for the management of the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.privacyStatementUrl">PrivacyStatementUrl</a></code> | <code>string</code> | URL of the privacy statement for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.requestedAccessTokenVersion">RequestedAccessTokenVersion</a></code> | <code>double</code> | The access token version expected by this resource. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.serviceManagementReference">ServiceManagementReference</a></code> | <code>string</code> | References application or contact information from a service or asset management database. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.signInAudience">SignInAudience</a></code> | <code>string</code> | The Microsoft account types that are supported for the current application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.supportUrl">SupportUrl</a></code> | <code>string</code> | URL of the support page for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.termsOfServiceUrl">TermsOfServiceUrl</a></code> | <code>string</code> | URL of the terms of service statement for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#display_name ApplicationRegistration#display_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the application as shown to end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#description ApplicationRegistration#description}

---

##### `GroupMembershipClaims`<sup>Optional</sup> <a name="GroupMembershipClaims" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.groupMembershipClaims"></a>

```csharp
public string[] GroupMembershipClaims { get; set; }
```

- *Type:* string[]

Configures the `groups` claim that the app expects issued in a user or OAuth access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#group_membership_claims ApplicationRegistration#group_membership_claims}

---

##### `HomepageUrl`<sup>Optional</sup> <a name="HomepageUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.homepageUrl"></a>

```csharp
public string HomepageUrl { get; set; }
```

- *Type:* string

URL of the home page for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#homepage_url ApplicationRegistration#homepage_url}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#id ApplicationRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImplicitAccessTokenIssuanceEnabled`<sup>Optional</sup> <a name="ImplicitAccessTokenIssuanceEnabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.implicitAccessTokenIssuanceEnabled"></a>

```csharp
public object ImplicitAccessTokenIssuanceEnabled { get; set; }
```

- *Type:* object

Whether this application can request an access token using OAuth implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#implicit_access_token_issuance_enabled ApplicationRegistration#implicit_access_token_issuance_enabled}

---

##### `ImplicitIdTokenIssuanceEnabled`<sup>Optional</sup> <a name="ImplicitIdTokenIssuanceEnabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.implicitIdTokenIssuanceEnabled"></a>

```csharp
public object ImplicitIdTokenIssuanceEnabled { get; set; }
```

- *Type:* object

Whether this application can request an ID token using OAuth implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#implicit_id_token_issuance_enabled ApplicationRegistration#implicit_id_token_issuance_enabled}

---

##### `LogoutUrl`<sup>Optional</sup> <a name="LogoutUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.logoutUrl"></a>

```csharp
public string LogoutUrl { get; set; }
```

- *Type:* string

URL of the logout page for the application, where the session is cleared for single sign-out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#logout_url ApplicationRegistration#logout_url}

---

##### `MarketingUrl`<sup>Optional</sup> <a name="MarketingUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.marketingUrl"></a>

```csharp
public string MarketingUrl { get; set; }
```

- *Type:* string

URL of the marketing page for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#marketing_url ApplicationRegistration#marketing_url}

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.notes"></a>

```csharp
public string Notes { get; set; }
```

- *Type:* string

User-specified notes relevant for the management of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#notes ApplicationRegistration#notes}

---

##### `PrivacyStatementUrl`<sup>Optional</sup> <a name="PrivacyStatementUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.privacyStatementUrl"></a>

```csharp
public string PrivacyStatementUrl { get; set; }
```

- *Type:* string

URL of the privacy statement for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#privacy_statement_url ApplicationRegistration#privacy_statement_url}

---

##### `RequestedAccessTokenVersion`<sup>Optional</sup> <a name="RequestedAccessTokenVersion" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.requestedAccessTokenVersion"></a>

```csharp
public double RequestedAccessTokenVersion { get; set; }
```

- *Type:* double

The access token version expected by this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#requested_access_token_version ApplicationRegistration#requested_access_token_version}

---

##### `ServiceManagementReference`<sup>Optional</sup> <a name="ServiceManagementReference" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.serviceManagementReference"></a>

```csharp
public string ServiceManagementReference { get; set; }
```

- *Type:* string

References application or contact information from a service or asset management database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#service_management_reference ApplicationRegistration#service_management_reference}

---

##### `SignInAudience`<sup>Optional</sup> <a name="SignInAudience" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.signInAudience"></a>

```csharp
public string SignInAudience { get; set; }
```

- *Type:* string

The Microsoft account types that are supported for the current application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#sign_in_audience ApplicationRegistration#sign_in_audience}

---

##### `SupportUrl`<sup>Optional</sup> <a name="SupportUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.supportUrl"></a>

```csharp
public string SupportUrl { get; set; }
```

- *Type:* string

URL of the support page for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#support_url ApplicationRegistration#support_url}

---

##### `TermsOfServiceUrl`<sup>Optional</sup> <a name="TermsOfServiceUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.termsOfServiceUrl"></a>

```csharp
public string TermsOfServiceUrl { get; set; }
```

- *Type:* string

URL of the terms of service statement for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#terms_of_service_url ApplicationRegistration#terms_of_service_url}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.timeouts"></a>

```csharp
public ApplicationRegistrationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#timeouts ApplicationRegistration#timeouts}

---

### ApplicationRegistrationTimeouts <a name="ApplicationRegistrationTimeouts" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationRegistrationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#create ApplicationRegistration#create}. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#delete ApplicationRegistration#delete}. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#read ApplicationRegistration#read}. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#update ApplicationRegistration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#create ApplicationRegistration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#delete ApplicationRegistration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#read ApplicationRegistration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application_registration#update ApplicationRegistration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationRegistrationTimeoutsOutputReference <a name="ApplicationRegistrationTimeoutsOutputReference" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationRegistrationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



