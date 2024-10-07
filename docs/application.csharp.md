# `application` Submodule <a name="`application` Submodule" id="@cdktf/provider-azuread.application"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Application <a name="Application" id="@cdktf/provider-azuread.application.Application"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application azuread_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.Application.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new Application(Construct Scope, string Id, ApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig">ApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationConfig">ApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.application.Application.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.application.Application.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.application.Application.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.application.Application.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.application.Application.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.application.Application.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.application.Application.putApi">PutApi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putAppRole">PutAppRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putFeatureTags">PutFeatureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putOptionalClaims">PutOptionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putPassword">PutPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putPublicClient">PutPublicClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putRequiredResourceAccess">PutRequiredResourceAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putSinglePageApplication">PutSinglePageApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putWeb">PutWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetApi">ResetApi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetAppRole">ResetAppRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetDeviceOnlyAuthEnabled">ResetDeviceOnlyAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetFallbackPublicClientEnabled">ResetFallbackPublicClientEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetFeatureTags">ResetFeatureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetGroupMembershipClaims">ResetGroupMembershipClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetIdentifierUris">ResetIdentifierUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetLogoImage">ResetLogoImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetMarketingUrl">ResetMarketingUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetNotes">ResetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetOauth2PostResponseRequired">ResetOauth2PostResponseRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetOptionalClaims">ResetOptionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetOwners">ResetOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetPreventDuplicateNames">ResetPreventDuplicateNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetPrivacyStatementUrl">ResetPrivacyStatementUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetPublicClient">ResetPublicClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetRequiredResourceAccess">ResetRequiredResourceAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetServiceManagementReference">ResetServiceManagementReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetSignInAudience">ResetSignInAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetSinglePageApplication">ResetSinglePageApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetSupportUrl">ResetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetTemplateId">ResetTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetTermsOfServiceUrl">ResetTermsOfServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetWeb">ResetWeb</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.Application.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.application.Application.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azuread.application.Application.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.application.Application.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.application.Application.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azuread.application.Application.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.application.Application.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azuread.application.Application.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.application.Application.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.application.Application.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azuread.application.Application.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azuread.application.Application.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.Application.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.Application.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.Application.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.Application.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.Application.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.Application.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.Application.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.Application.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.Application.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.Application.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.Application.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.Application.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.Application.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.Application.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.Application.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.Application.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.Application.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.Application.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azuread.application.Application.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azuread.application.Application.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.application.Application.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.application.Application.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.Application.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.Application.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azuread.application.Application.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.application.Application.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azuread.application.Application.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azuread.application.Application.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azuread.application.Application.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azuread.application.Application.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.application.Application.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApi` <a name="PutApi" id="@cdktf/provider-azuread.application.Application.putApi"></a>

```csharp
private void PutApi(ApplicationApi Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.application.Application.putApi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a>

---

##### `PutAppRole` <a name="PutAppRole" id="@cdktf/provider-azuread.application.Application.putAppRole"></a>

```csharp
private void PutAppRole(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.application.Application.putAppRole.parameter.value"></a>

- *Type:* object

---

##### `PutFeatureTags` <a name="PutFeatureTags" id="@cdktf/provider-azuread.application.Application.putFeatureTags"></a>

```csharp
private void PutFeatureTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.application.Application.putFeatureTags.parameter.value"></a>

- *Type:* object

---

##### `PutOptionalClaims` <a name="PutOptionalClaims" id="@cdktf/provider-azuread.application.Application.putOptionalClaims"></a>

```csharp
private void PutOptionalClaims(ApplicationOptionalClaims Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.application.Application.putOptionalClaims.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a>

---

##### `PutPassword` <a name="PutPassword" id="@cdktf/provider-azuread.application.Application.putPassword"></a>

```csharp
private void PutPassword(ApplicationPassword Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.application.Application.putPassword.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPassword">ApplicationPassword</a>

---

##### `PutPublicClient` <a name="PutPublicClient" id="@cdktf/provider-azuread.application.Application.putPublicClient"></a>

```csharp
private void PutPublicClient(ApplicationPublicClient Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.application.Application.putPublicClient.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a>

---

##### `PutRequiredResourceAccess` <a name="PutRequiredResourceAccess" id="@cdktf/provider-azuread.application.Application.putRequiredResourceAccess"></a>

```csharp
private void PutRequiredResourceAccess(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.application.Application.putRequiredResourceAccess.parameter.value"></a>

- *Type:* object

---

##### `PutSinglePageApplication` <a name="PutSinglePageApplication" id="@cdktf/provider-azuread.application.Application.putSinglePageApplication"></a>

```csharp
private void PutSinglePageApplication(ApplicationSinglePageApplication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.application.Application.putSinglePageApplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.application.Application.putTimeouts"></a>

```csharp
private void PutTimeouts(ApplicationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.application.Application.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a>

---

##### `PutWeb` <a name="PutWeb" id="@cdktf/provider-azuread.application.Application.putWeb"></a>

```csharp
private void PutWeb(ApplicationWeb Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.application.Application.putWeb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a>

---

##### `ResetApi` <a name="ResetApi" id="@cdktf/provider-azuread.application.Application.resetApi"></a>

```csharp
private void ResetApi()
```

##### `ResetAppRole` <a name="ResetAppRole" id="@cdktf/provider-azuread.application.Application.resetAppRole"></a>

```csharp
private void ResetAppRole()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azuread.application.Application.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDeviceOnlyAuthEnabled` <a name="ResetDeviceOnlyAuthEnabled" id="@cdktf/provider-azuread.application.Application.resetDeviceOnlyAuthEnabled"></a>

```csharp
private void ResetDeviceOnlyAuthEnabled()
```

##### `ResetFallbackPublicClientEnabled` <a name="ResetFallbackPublicClientEnabled" id="@cdktf/provider-azuread.application.Application.resetFallbackPublicClientEnabled"></a>

```csharp
private void ResetFallbackPublicClientEnabled()
```

##### `ResetFeatureTags` <a name="ResetFeatureTags" id="@cdktf/provider-azuread.application.Application.resetFeatureTags"></a>

```csharp
private void ResetFeatureTags()
```

##### `ResetGroupMembershipClaims` <a name="ResetGroupMembershipClaims" id="@cdktf/provider-azuread.application.Application.resetGroupMembershipClaims"></a>

```csharp
private void ResetGroupMembershipClaims()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.application.Application.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentifierUris` <a name="ResetIdentifierUris" id="@cdktf/provider-azuread.application.Application.resetIdentifierUris"></a>

```csharp
private void ResetIdentifierUris()
```

##### `ResetLogoImage` <a name="ResetLogoImage" id="@cdktf/provider-azuread.application.Application.resetLogoImage"></a>

```csharp
private void ResetLogoImage()
```

##### `ResetMarketingUrl` <a name="ResetMarketingUrl" id="@cdktf/provider-azuread.application.Application.resetMarketingUrl"></a>

```csharp
private void ResetMarketingUrl()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktf/provider-azuread.application.Application.resetNotes"></a>

```csharp
private void ResetNotes()
```

##### `ResetOauth2PostResponseRequired` <a name="ResetOauth2PostResponseRequired" id="@cdktf/provider-azuread.application.Application.resetOauth2PostResponseRequired"></a>

```csharp
private void ResetOauth2PostResponseRequired()
```

##### `ResetOptionalClaims` <a name="ResetOptionalClaims" id="@cdktf/provider-azuread.application.Application.resetOptionalClaims"></a>

```csharp
private void ResetOptionalClaims()
```

##### `ResetOwners` <a name="ResetOwners" id="@cdktf/provider-azuread.application.Application.resetOwners"></a>

```csharp
private void ResetOwners()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azuread.application.Application.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPreventDuplicateNames` <a name="ResetPreventDuplicateNames" id="@cdktf/provider-azuread.application.Application.resetPreventDuplicateNames"></a>

```csharp
private void ResetPreventDuplicateNames()
```

##### `ResetPrivacyStatementUrl` <a name="ResetPrivacyStatementUrl" id="@cdktf/provider-azuread.application.Application.resetPrivacyStatementUrl"></a>

```csharp
private void ResetPrivacyStatementUrl()
```

##### `ResetPublicClient` <a name="ResetPublicClient" id="@cdktf/provider-azuread.application.Application.resetPublicClient"></a>

```csharp
private void ResetPublicClient()
```

##### `ResetRequiredResourceAccess` <a name="ResetRequiredResourceAccess" id="@cdktf/provider-azuread.application.Application.resetRequiredResourceAccess"></a>

```csharp
private void ResetRequiredResourceAccess()
```

##### `ResetServiceManagementReference` <a name="ResetServiceManagementReference" id="@cdktf/provider-azuread.application.Application.resetServiceManagementReference"></a>

```csharp
private void ResetServiceManagementReference()
```

##### `ResetSignInAudience` <a name="ResetSignInAudience" id="@cdktf/provider-azuread.application.Application.resetSignInAudience"></a>

```csharp
private void ResetSignInAudience()
```

##### `ResetSinglePageApplication` <a name="ResetSinglePageApplication" id="@cdktf/provider-azuread.application.Application.resetSinglePageApplication"></a>

```csharp
private void ResetSinglePageApplication()
```

##### `ResetSupportUrl` <a name="ResetSupportUrl" id="@cdktf/provider-azuread.application.Application.resetSupportUrl"></a>

```csharp
private void ResetSupportUrl()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azuread.application.Application.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTemplateId` <a name="ResetTemplateId" id="@cdktf/provider-azuread.application.Application.resetTemplateId"></a>

```csharp
private void ResetTemplateId()
```

##### `ResetTermsOfServiceUrl` <a name="ResetTermsOfServiceUrl" id="@cdktf/provider-azuread.application.Application.resetTermsOfServiceUrl"></a>

```csharp
private void ResetTermsOfServiceUrl()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.application.Application.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWeb` <a name="ResetWeb" id="@cdktf/provider-azuread.application.Application.resetWeb"></a>

```csharp
private void ResetWeb()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.application.Application.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Application resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.application.Application.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

Application.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.application.Application.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.application.Application.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

Application.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.application.Application.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.application.Application.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

Application.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.application.Application.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.application.Application.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

Application.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Application resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.application.Application.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azuread.application.Application.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Application to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azuread.application.Application.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Application that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.application.Application.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Application to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.api">Api</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference">ApplicationApiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.appRole">AppRole</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList">ApplicationAppRoleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.appRoleIds">AppRoleIds</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.disabledByMicrosoft">DisabledByMicrosoft</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.featureTags">FeatureTags</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList">ApplicationFeatureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.logoUrl">LogoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.oauth2PermissionScopeIds">Oauth2PermissionScopeIds</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.optionalClaims">OptionalClaims</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference">ApplicationOptionalClaimsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.password">Password</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference">ApplicationPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.publicClient">PublicClient</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference">ApplicationPublicClientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.publisherDomain">PublisherDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.requiredResourceAccess">RequiredResourceAccess</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList">ApplicationRequiredResourceAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.singlePageApplication">SinglePageApplication</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference">ApplicationSinglePageApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference">ApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.web">Web</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference">ApplicationWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.apiInput">ApiInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.appRoleInput">AppRoleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.deviceOnlyAuthEnabledInput">DeviceOnlyAuthEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.fallbackPublicClientEnabledInput">FallbackPublicClientEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.featureTagsInput">FeatureTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.groupMembershipClaimsInput">GroupMembershipClaimsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.identifierUrisInput">IdentifierUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.logoImageInput">LogoImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.marketingUrlInput">MarketingUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.notesInput">NotesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.oauth2PostResponseRequiredInput">Oauth2PostResponseRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.optionalClaimsInput">OptionalClaimsInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.ownersInput">OwnersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.passwordInput">PasswordInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPassword">ApplicationPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.preventDuplicateNamesInput">PreventDuplicateNamesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.privacyStatementUrlInput">PrivacyStatementUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.publicClientInput">PublicClientInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.requiredResourceAccessInput">RequiredResourceAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.serviceManagementReferenceInput">ServiceManagementReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.signInAudienceInput">SignInAudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.singlePageApplicationInput">SinglePageApplicationInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.supportUrlInput">SupportUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.templateIdInput">TemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.termsOfServiceUrlInput">TermsOfServiceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.webInput">WebInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.deviceOnlyAuthEnabled">DeviceOnlyAuthEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.fallbackPublicClientEnabled">FallbackPublicClientEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.groupMembershipClaims">GroupMembershipClaims</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.identifierUris">IdentifierUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.logoImage">LogoImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.marketingUrl">MarketingUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.notes">Notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.oauth2PostResponseRequired">Oauth2PostResponseRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.owners">Owners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.preventDuplicateNames">PreventDuplicateNames</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.privacyStatementUrl">PrivacyStatementUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.serviceManagementReference">ServiceManagementReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.signInAudience">SignInAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.supportUrl">SupportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.templateId">TemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.termsOfServiceUrl">TermsOfServiceUrl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.application.Application.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.application.Application.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.Application.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.application.Application.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.application.Application.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.application.Application.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.application.Application.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.application.Application.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.application.Application.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.application.Application.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.application.Application.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.application.Application.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.application.Application.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.application.Application.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktf/provider-azuread.application.Application.property.api"></a>

```csharp
public ApplicationApiOutputReference Api { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference">ApplicationApiOutputReference</a>

---

##### `AppRole`<sup>Required</sup> <a name="AppRole" id="@cdktf/provider-azuread.application.Application.property.appRole"></a>

```csharp
public ApplicationAppRoleList AppRole { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList">ApplicationAppRoleList</a>

---

##### `AppRoleIds`<sup>Required</sup> <a name="AppRoleIds" id="@cdktf/provider-azuread.application.Application.property.appRoleIds"></a>

```csharp
public StringMap AppRoleIds { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azuread.application.Application.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `DisabledByMicrosoft`<sup>Required</sup> <a name="DisabledByMicrosoft" id="@cdktf/provider-azuread.application.Application.property.disabledByMicrosoft"></a>

```csharp
public string DisabledByMicrosoft { get; }
```

- *Type:* string

---

##### `FeatureTags`<sup>Required</sup> <a name="FeatureTags" id="@cdktf/provider-azuread.application.Application.property.featureTags"></a>

```csharp
public ApplicationFeatureTagsList FeatureTags { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList">ApplicationFeatureTagsList</a>

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-azuread.application.Application.property.logoUrl"></a>

```csharp
public string LogoUrl { get; }
```

- *Type:* string

---

##### `Oauth2PermissionScopeIds`<sup>Required</sup> <a name="Oauth2PermissionScopeIds" id="@cdktf/provider-azuread.application.Application.property.oauth2PermissionScopeIds"></a>

```csharp
public StringMap Oauth2PermissionScopeIds { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azuread.application.Application.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `OptionalClaims`<sup>Required</sup> <a name="OptionalClaims" id="@cdktf/provider-azuread.application.Application.property.optionalClaims"></a>

```csharp
public ApplicationOptionalClaimsOutputReference OptionalClaims { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference">ApplicationOptionalClaimsOutputReference</a>

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azuread.application.Application.property.password"></a>

```csharp
public ApplicationPasswordOutputReference Password { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference">ApplicationPasswordOutputReference</a>

---

##### `PublicClient`<sup>Required</sup> <a name="PublicClient" id="@cdktf/provider-azuread.application.Application.property.publicClient"></a>

```csharp
public ApplicationPublicClientOutputReference PublicClient { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference">ApplicationPublicClientOutputReference</a>

---

##### `PublisherDomain`<sup>Required</sup> <a name="PublisherDomain" id="@cdktf/provider-azuread.application.Application.property.publisherDomain"></a>

```csharp
public string PublisherDomain { get; }
```

- *Type:* string

---

##### `RequiredResourceAccess`<sup>Required</sup> <a name="RequiredResourceAccess" id="@cdktf/provider-azuread.application.Application.property.requiredResourceAccess"></a>

```csharp
public ApplicationRequiredResourceAccessList RequiredResourceAccess { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList">ApplicationRequiredResourceAccessList</a>

---

##### `SinglePageApplication`<sup>Required</sup> <a name="SinglePageApplication" id="@cdktf/provider-azuread.application.Application.property.singlePageApplication"></a>

```csharp
public ApplicationSinglePageApplicationOutputReference SinglePageApplication { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference">ApplicationSinglePageApplicationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.application.Application.property.timeouts"></a>

```csharp
public ApplicationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference">ApplicationTimeoutsOutputReference</a>

---

##### `Web`<sup>Required</sup> <a name="Web" id="@cdktf/provider-azuread.application.Application.property.web"></a>

```csharp
public ApplicationWebOutputReference Web { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference">ApplicationWebOutputReference</a>

---

##### `ApiInput`<sup>Optional</sup> <a name="ApiInput" id="@cdktf/provider-azuread.application.Application.property.apiInput"></a>

```csharp
public ApplicationApi ApiInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a>

---

##### `AppRoleInput`<sup>Optional</sup> <a name="AppRoleInput" id="@cdktf/provider-azuread.application.Application.property.appRoleInput"></a>

```csharp
public object AppRoleInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azuread.application.Application.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DeviceOnlyAuthEnabledInput`<sup>Optional</sup> <a name="DeviceOnlyAuthEnabledInput" id="@cdktf/provider-azuread.application.Application.property.deviceOnlyAuthEnabledInput"></a>

```csharp
public object DeviceOnlyAuthEnabledInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azuread.application.Application.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FallbackPublicClientEnabledInput`<sup>Optional</sup> <a name="FallbackPublicClientEnabledInput" id="@cdktf/provider-azuread.application.Application.property.fallbackPublicClientEnabledInput"></a>

```csharp
public object FallbackPublicClientEnabledInput { get; }
```

- *Type:* object

---

##### `FeatureTagsInput`<sup>Optional</sup> <a name="FeatureTagsInput" id="@cdktf/provider-azuread.application.Application.property.featureTagsInput"></a>

```csharp
public object FeatureTagsInput { get; }
```

- *Type:* object

---

##### `GroupMembershipClaimsInput`<sup>Optional</sup> <a name="GroupMembershipClaimsInput" id="@cdktf/provider-azuread.application.Application.property.groupMembershipClaimsInput"></a>

```csharp
public string[] GroupMembershipClaimsInput { get; }
```

- *Type:* string[]

---

##### `IdentifierUrisInput`<sup>Optional</sup> <a name="IdentifierUrisInput" id="@cdktf/provider-azuread.application.Application.property.identifierUrisInput"></a>

```csharp
public string[] IdentifierUrisInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.application.Application.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogoImageInput`<sup>Optional</sup> <a name="LogoImageInput" id="@cdktf/provider-azuread.application.Application.property.logoImageInput"></a>

```csharp
public string LogoImageInput { get; }
```

- *Type:* string

---

##### `MarketingUrlInput`<sup>Optional</sup> <a name="MarketingUrlInput" id="@cdktf/provider-azuread.application.Application.property.marketingUrlInput"></a>

```csharp
public string MarketingUrlInput { get; }
```

- *Type:* string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktf/provider-azuread.application.Application.property.notesInput"></a>

```csharp
public string NotesInput { get; }
```

- *Type:* string

---

##### `Oauth2PostResponseRequiredInput`<sup>Optional</sup> <a name="Oauth2PostResponseRequiredInput" id="@cdktf/provider-azuread.application.Application.property.oauth2PostResponseRequiredInput"></a>

```csharp
public object Oauth2PostResponseRequiredInput { get; }
```

- *Type:* object

---

##### `OptionalClaimsInput`<sup>Optional</sup> <a name="OptionalClaimsInput" id="@cdktf/provider-azuread.application.Application.property.optionalClaimsInput"></a>

```csharp
public ApplicationOptionalClaims OptionalClaimsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a>

---

##### `OwnersInput`<sup>Optional</sup> <a name="OwnersInput" id="@cdktf/provider-azuread.application.Application.property.ownersInput"></a>

```csharp
public string[] OwnersInput { get; }
```

- *Type:* string[]

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azuread.application.Application.property.passwordInput"></a>

```csharp
public ApplicationPassword PasswordInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPassword">ApplicationPassword</a>

---

##### `PreventDuplicateNamesInput`<sup>Optional</sup> <a name="PreventDuplicateNamesInput" id="@cdktf/provider-azuread.application.Application.property.preventDuplicateNamesInput"></a>

```csharp
public object PreventDuplicateNamesInput { get; }
```

- *Type:* object

---

##### `PrivacyStatementUrlInput`<sup>Optional</sup> <a name="PrivacyStatementUrlInput" id="@cdktf/provider-azuread.application.Application.property.privacyStatementUrlInput"></a>

```csharp
public string PrivacyStatementUrlInput { get; }
```

- *Type:* string

---

##### `PublicClientInput`<sup>Optional</sup> <a name="PublicClientInput" id="@cdktf/provider-azuread.application.Application.property.publicClientInput"></a>

```csharp
public ApplicationPublicClient PublicClientInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a>

---

##### `RequiredResourceAccessInput`<sup>Optional</sup> <a name="RequiredResourceAccessInput" id="@cdktf/provider-azuread.application.Application.property.requiredResourceAccessInput"></a>

```csharp
public object RequiredResourceAccessInput { get; }
```

- *Type:* object

---

##### `ServiceManagementReferenceInput`<sup>Optional</sup> <a name="ServiceManagementReferenceInput" id="@cdktf/provider-azuread.application.Application.property.serviceManagementReferenceInput"></a>

```csharp
public string ServiceManagementReferenceInput { get; }
```

- *Type:* string

---

##### `SignInAudienceInput`<sup>Optional</sup> <a name="SignInAudienceInput" id="@cdktf/provider-azuread.application.Application.property.signInAudienceInput"></a>

```csharp
public string SignInAudienceInput { get; }
```

- *Type:* string

---

##### `SinglePageApplicationInput`<sup>Optional</sup> <a name="SinglePageApplicationInput" id="@cdktf/provider-azuread.application.Application.property.singlePageApplicationInput"></a>

```csharp
public ApplicationSinglePageApplication SinglePageApplicationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a>

---

##### `SupportUrlInput`<sup>Optional</sup> <a name="SupportUrlInput" id="@cdktf/provider-azuread.application.Application.property.supportUrlInput"></a>

```csharp
public string SupportUrlInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azuread.application.Application.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TemplateIdInput`<sup>Optional</sup> <a name="TemplateIdInput" id="@cdktf/provider-azuread.application.Application.property.templateIdInput"></a>

```csharp
public string TemplateIdInput { get; }
```

- *Type:* string

---

##### `TermsOfServiceUrlInput`<sup>Optional</sup> <a name="TermsOfServiceUrlInput" id="@cdktf/provider-azuread.application.Application.property.termsOfServiceUrlInput"></a>

```csharp
public string TermsOfServiceUrlInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.application.Application.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WebInput`<sup>Optional</sup> <a name="WebInput" id="@cdktf/provider-azuread.application.Application.property.webInput"></a>

```csharp
public ApplicationWeb WebInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azuread.application.Application.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DeviceOnlyAuthEnabled`<sup>Required</sup> <a name="DeviceOnlyAuthEnabled" id="@cdktf/provider-azuread.application.Application.property.deviceOnlyAuthEnabled"></a>

```csharp
public object DeviceOnlyAuthEnabled { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.application.Application.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FallbackPublicClientEnabled`<sup>Required</sup> <a name="FallbackPublicClientEnabled" id="@cdktf/provider-azuread.application.Application.property.fallbackPublicClientEnabled"></a>

```csharp
public object FallbackPublicClientEnabled { get; }
```

- *Type:* object

---

##### `GroupMembershipClaims`<sup>Required</sup> <a name="GroupMembershipClaims" id="@cdktf/provider-azuread.application.Application.property.groupMembershipClaims"></a>

```csharp
public string[] GroupMembershipClaims { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.application.Application.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentifierUris`<sup>Required</sup> <a name="IdentifierUris" id="@cdktf/provider-azuread.application.Application.property.identifierUris"></a>

```csharp
public string[] IdentifierUris { get; }
```

- *Type:* string[]

---

##### `LogoImage`<sup>Required</sup> <a name="LogoImage" id="@cdktf/provider-azuread.application.Application.property.logoImage"></a>

```csharp
public string LogoImage { get; }
```

- *Type:* string

---

##### `MarketingUrl`<sup>Required</sup> <a name="MarketingUrl" id="@cdktf/provider-azuread.application.Application.property.marketingUrl"></a>

```csharp
public string MarketingUrl { get; }
```

- *Type:* string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-azuread.application.Application.property.notes"></a>

```csharp
public string Notes { get; }
```

- *Type:* string

---

##### `Oauth2PostResponseRequired`<sup>Required</sup> <a name="Oauth2PostResponseRequired" id="@cdktf/provider-azuread.application.Application.property.oauth2PostResponseRequired"></a>

```csharp
public object Oauth2PostResponseRequired { get; }
```

- *Type:* object

---

##### `Owners`<sup>Required</sup> <a name="Owners" id="@cdktf/provider-azuread.application.Application.property.owners"></a>

```csharp
public string[] Owners { get; }
```

- *Type:* string[]

---

##### `PreventDuplicateNames`<sup>Required</sup> <a name="PreventDuplicateNames" id="@cdktf/provider-azuread.application.Application.property.preventDuplicateNames"></a>

```csharp
public object PreventDuplicateNames { get; }
```

- *Type:* object

---

##### `PrivacyStatementUrl`<sup>Required</sup> <a name="PrivacyStatementUrl" id="@cdktf/provider-azuread.application.Application.property.privacyStatementUrl"></a>

```csharp
public string PrivacyStatementUrl { get; }
```

- *Type:* string

---

##### `ServiceManagementReference`<sup>Required</sup> <a name="ServiceManagementReference" id="@cdktf/provider-azuread.application.Application.property.serviceManagementReference"></a>

```csharp
public string ServiceManagementReference { get; }
```

- *Type:* string

---

##### `SignInAudience`<sup>Required</sup> <a name="SignInAudience" id="@cdktf/provider-azuread.application.Application.property.signInAudience"></a>

```csharp
public string SignInAudience { get; }
```

- *Type:* string

---

##### `SupportUrl`<sup>Required</sup> <a name="SupportUrl" id="@cdktf/provider-azuread.application.Application.property.supportUrl"></a>

```csharp
public string SupportUrl { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azuread.application.Application.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktf/provider-azuread.application.Application.property.templateId"></a>

```csharp
public string TemplateId { get; }
```

- *Type:* string

---

##### `TermsOfServiceUrl`<sup>Required</sup> <a name="TermsOfServiceUrl" id="@cdktf/provider-azuread.application.Application.property.termsOfServiceUrl"></a>

```csharp
public string TermsOfServiceUrl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.application.Application.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationApi <a name="ApplicationApi" id="@cdktf/provider-azuread.application.ApplicationApi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationApi.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationApi {
    string[] KnownClientApplications = null,
    object MappedClaimsEnabled = null,
    object Oauth2PermissionScope = null,
    double RequestedAccessTokenVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApi.property.knownClientApplications">KnownClientApplications</a></code> | <code>string[]</code> | Used for bundling consent if you have a solution that contains two parts: a client app and a custom web API app. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApi.property.mappedClaimsEnabled">MappedClaimsEnabled</a></code> | <code>object</code> | Allows an application to use claims mapping without specifying a custom signing key. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApi.property.oauth2PermissionScope">Oauth2PermissionScope</a></code> | <code>object</code> | oauth2_permission_scope block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApi.property.requestedAccessTokenVersion">RequestedAccessTokenVersion</a></code> | <code>double</code> | The access token version expected by this resource. |

---

##### `KnownClientApplications`<sup>Optional</sup> <a name="KnownClientApplications" id="@cdktf/provider-azuread.application.ApplicationApi.property.knownClientApplications"></a>

```csharp
public string[] KnownClientApplications { get; set; }
```

- *Type:* string[]

Used for bundling consent if you have a solution that contains two parts: a client app and a custom web API app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#known_client_applications Application#known_client_applications}

---

##### `MappedClaimsEnabled`<sup>Optional</sup> <a name="MappedClaimsEnabled" id="@cdktf/provider-azuread.application.ApplicationApi.property.mappedClaimsEnabled"></a>

```csharp
public object MappedClaimsEnabled { get; set; }
```

- *Type:* object

Allows an application to use claims mapping without specifying a custom signing key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#mapped_claims_enabled Application#mapped_claims_enabled}

---

##### `Oauth2PermissionScope`<sup>Optional</sup> <a name="Oauth2PermissionScope" id="@cdktf/provider-azuread.application.ApplicationApi.property.oauth2PermissionScope"></a>

```csharp
public object Oauth2PermissionScope { get; set; }
```

- *Type:* object

oauth2_permission_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#oauth2_permission_scope Application#oauth2_permission_scope}

---

##### `RequestedAccessTokenVersion`<sup>Optional</sup> <a name="RequestedAccessTokenVersion" id="@cdktf/provider-azuread.application.ApplicationApi.property.requestedAccessTokenVersion"></a>

```csharp
public double RequestedAccessTokenVersion { get; set; }
```

- *Type:* double

The access token version expected by this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#requested_access_token_version Application#requested_access_token_version}

---

### ApplicationApiOauth2PermissionScope <a name="ApplicationApiOauth2PermissionScope" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationApiOauth2PermissionScope {
    string Id,
    string AdminConsentDescription = null,
    string AdminConsentDisplayName = null,
    object Enabled = null,
    string Type = null,
    string UserConsentDescription = null,
    string UserConsentDisplayName = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.id">Id</a></code> | <code>string</code> | The unique identifier of the delegated permission. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.adminConsentDescription">AdminConsentDescription</a></code> | <code>string</code> | Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.adminConsentDisplayName">AdminConsentDisplayName</a></code> | <code>string</code> | Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.enabled">Enabled</a></code> | <code>object</code> | Determines if the permission scope is enabled. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.type">Type</a></code> | <code>string</code> | Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.userConsentDescription">UserConsentDescription</a></code> | <code>string</code> | Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.userConsentDisplayName">UserConsentDisplayName</a></code> | <code>string</code> | Display name for the delegated permission that appears in the end user consent experience. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.value">Value</a></code> | <code>string</code> | The value that is used for the `scp` claim in OAuth 2.0 access tokens. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The unique identifier of the delegated permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#id Application#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `AdminConsentDescription`<sup>Optional</sup> <a name="AdminConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.adminConsentDescription"></a>

```csharp
public string AdminConsentDescription { get; set; }
```

- *Type:* string

Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#admin_consent_description Application#admin_consent_description}

---

##### `AdminConsentDisplayName`<sup>Optional</sup> <a name="AdminConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.adminConsentDisplayName"></a>

```csharp
public string AdminConsentDisplayName { get; set; }
```

- *Type:* string

Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#admin_consent_display_name Application#admin_consent_display_name}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Determines if the permission scope is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#enabled Application#enabled}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#type Application#type}

---

##### `UserConsentDescription`<sup>Optional</sup> <a name="UserConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.userConsentDescription"></a>

```csharp
public string UserConsentDescription { get; set; }
```

- *Type:* string

Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#user_consent_description Application#user_consent_description}

---

##### `UserConsentDisplayName`<sup>Optional</sup> <a name="UserConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.userConsentDisplayName"></a>

```csharp
public string UserConsentDisplayName { get; set; }
```

- *Type:* string

Display name for the delegated permission that appears in the end user consent experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#user_consent_display_name Application#user_consent_display_name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value that is used for the `scp` claim in OAuth 2.0 access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#value Application#value}

---

### ApplicationAppRole <a name="ApplicationAppRole" id="@cdktf/provider-azuread.application.ApplicationAppRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationAppRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationAppRole {
    string[] AllowedMemberTypes,
    string Description,
    string DisplayName,
    string Id,
    object Enabled = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.allowedMemberTypes">AllowedMemberTypes</a></code> | <code>string[]</code> | Specifies whether this app role definition can be assigned to users and groups by setting to `User`, or to other applications (that are accessing this application in a standalone scenario) by setting to `Application`, or to both. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.description">Description</a></code> | <code>string</code> | Description of the app role that appears when the role is being assigned and, if the role functions as an application permissions, during the consent experiences. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.displayName">DisplayName</a></code> | <code>string</code> | Display name for the app role that appears during app role assignment and in consent experiences. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.id">Id</a></code> | <code>string</code> | The unique identifier of the app role. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.enabled">Enabled</a></code> | <code>object</code> | Determines if the app role is enabled. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.value">Value</a></code> | <code>string</code> | The value that is used for the `roles` claim in ID tokens and OAuth 2.0 access tokens that are authenticating an assigned service or user principal. |

---

##### `AllowedMemberTypes`<sup>Required</sup> <a name="AllowedMemberTypes" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.allowedMemberTypes"></a>

```csharp
public string[] AllowedMemberTypes { get; set; }
```

- *Type:* string[]

Specifies whether this app role definition can be assigned to users and groups by setting to `User`, or to other applications (that are accessing this application in a standalone scenario) by setting to `Application`, or to both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#allowed_member_types Application#allowed_member_types}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the app role that appears when the role is being assigned and, if the role functions as an application permissions, during the consent experiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#description Application#description}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display name for the app role that appears during app role assignment and in consent experiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#display_name Application#display_name}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The unique identifier of the app role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#id Application#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Determines if the app role is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#enabled Application#enabled}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value that is used for the `roles` claim in ID tokens and OAuth 2.0 access tokens that are authenticating an assigned service or user principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#value Application#value}

---

### ApplicationConfig <a name="ApplicationConfig" id="@cdktf/provider-azuread.application.ApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    ApplicationApi Api = null,
    object AppRole = null,
    string Description = null,
    object DeviceOnlyAuthEnabled = null,
    object FallbackPublicClientEnabled = null,
    object FeatureTags = null,
    string[] GroupMembershipClaims = null,
    string Id = null,
    string[] IdentifierUris = null,
    string LogoImage = null,
    string MarketingUrl = null,
    string Notes = null,
    object Oauth2PostResponseRequired = null,
    ApplicationOptionalClaims OptionalClaims = null,
    string[] Owners = null,
    ApplicationPassword Password = null,
    object PreventDuplicateNames = null,
    string PrivacyStatementUrl = null,
    ApplicationPublicClient PublicClient = null,
    object RequiredResourceAccess = null,
    string ServiceManagementReference = null,
    string SignInAudience = null,
    ApplicationSinglePageApplication SinglePageApplication = null,
    string SupportUrl = null,
    string[] Tags = null,
    string TemplateId = null,
    string TermsOfServiceUrl = null,
    ApplicationTimeouts Timeouts = null,
    ApplicationWeb Web = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name for the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.api">Api</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a></code> | api block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.appRole">AppRole</a></code> | <code>object</code> | app_role block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.description">Description</a></code> | <code>string</code> | Description of the application as shown to end users. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.deviceOnlyAuthEnabled">DeviceOnlyAuthEnabled</a></code> | <code>object</code> | Specifies whether this application supports device authentication without a user. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.fallbackPublicClientEnabled">FallbackPublicClientEnabled</a></code> | <code>object</code> | Specifies whether the application is a public client. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.featureTags">FeatureTags</a></code> | <code>object</code> | feature_tags block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.groupMembershipClaims">GroupMembershipClaims</a></code> | <code>string[]</code> | Configures the `groups` claim issued in a user or OAuth 2.0 access token that the app expects. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#id Application#id}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.identifierUris">IdentifierUris</a></code> | <code>string[]</code> | The user-defined URI(s) that uniquely identify an application within its Azure AD tenant, or within a verified custom domain if the application is multi-tenant. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.logoImage">LogoImage</a></code> | <code>string</code> | Base64 encoded logo image in gif, png or jpeg format. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.marketingUrl">MarketingUrl</a></code> | <code>string</code> | URL of the application's marketing page. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.notes">Notes</a></code> | <code>string</code> | User-specified notes relevant for the management of the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.oauth2PostResponseRequired">Oauth2PostResponseRequired</a></code> | <code>object</code> | Specifies whether, as part of OAuth 2.0 token requests, Azure AD allows POST requests, as opposed to GET requests. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.optionalClaims">OptionalClaims</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a></code> | optional_claims block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.owners">Owners</a></code> | <code>string[]</code> | A list of object IDs of principals that will be granted ownership of the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.password">Password</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPassword">ApplicationPassword</a></code> | password block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.preventDuplicateNames">PreventDuplicateNames</a></code> | <code>object</code> | If `true`, will return an error if an existing application is found with the same name. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.privacyStatementUrl">PrivacyStatementUrl</a></code> | <code>string</code> | URL of the application's privacy statement. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.publicClient">PublicClient</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a></code> | public_client block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.requiredResourceAccess">RequiredResourceAccess</a></code> | <code>object</code> | required_resource_access block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.serviceManagementReference">ServiceManagementReference</a></code> | <code>string</code> | References application or service contact information from a Service or Asset Management database. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.signInAudience">SignInAudience</a></code> | <code>string</code> | The Microsoft account types that are supported for the current application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.singlePageApplication">SinglePageApplication</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a></code> | single_page_application block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.supportUrl">SupportUrl</a></code> | <code>string</code> | URL of the application's support page. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.tags">Tags</a></code> | <code>string[]</code> | A set of tags to apply to the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.templateId">TemplateId</a></code> | <code>string</code> | Unique ID of the application template from which this application is created. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.termsOfServiceUrl">TermsOfServiceUrl</a></code> | <code>string</code> | URL of the application's terms of service statement. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.web">Web</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a></code> | web block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.application.ApplicationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.application.ApplicationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.application.ApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.application.ApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.application.ApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.application.ApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.application.ApplicationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.application.ApplicationConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#display_name Application#display_name}

---

##### `Api`<sup>Optional</sup> <a name="Api" id="@cdktf/provider-azuread.application.ApplicationConfig.property.api"></a>

```csharp
public ApplicationApi Api { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a>

api block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#api Application#api}

---

##### `AppRole`<sup>Optional</sup> <a name="AppRole" id="@cdktf/provider-azuread.application.ApplicationConfig.property.appRole"></a>

```csharp
public object AppRole { get; set; }
```

- *Type:* object

app_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#app_role Application#app_role}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azuread.application.ApplicationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the application as shown to end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#description Application#description}

---

##### `DeviceOnlyAuthEnabled`<sup>Optional</sup> <a name="DeviceOnlyAuthEnabled" id="@cdktf/provider-azuread.application.ApplicationConfig.property.deviceOnlyAuthEnabled"></a>

```csharp
public object DeviceOnlyAuthEnabled { get; set; }
```

- *Type:* object

Specifies whether this application supports device authentication without a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#device_only_auth_enabled Application#device_only_auth_enabled}

---

##### `FallbackPublicClientEnabled`<sup>Optional</sup> <a name="FallbackPublicClientEnabled" id="@cdktf/provider-azuread.application.ApplicationConfig.property.fallbackPublicClientEnabled"></a>

```csharp
public object FallbackPublicClientEnabled { get; set; }
```

- *Type:* object

Specifies whether the application is a public client.

Appropriate for apps using token grant flows that don't use a redirect URI

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#fallback_public_client_enabled Application#fallback_public_client_enabled}

---

##### `FeatureTags`<sup>Optional</sup> <a name="FeatureTags" id="@cdktf/provider-azuread.application.ApplicationConfig.property.featureTags"></a>

```csharp
public object FeatureTags { get; set; }
```

- *Type:* object

feature_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#feature_tags Application#feature_tags}

---

##### `GroupMembershipClaims`<sup>Optional</sup> <a name="GroupMembershipClaims" id="@cdktf/provider-azuread.application.ApplicationConfig.property.groupMembershipClaims"></a>

```csharp
public string[] GroupMembershipClaims { get; set; }
```

- *Type:* string[]

Configures the `groups` claim issued in a user or OAuth 2.0 access token that the app expects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#group_membership_claims Application#group_membership_claims}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.application.ApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#id Application#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentifierUris`<sup>Optional</sup> <a name="IdentifierUris" id="@cdktf/provider-azuread.application.ApplicationConfig.property.identifierUris"></a>

```csharp
public string[] IdentifierUris { get; set; }
```

- *Type:* string[]

The user-defined URI(s) that uniquely identify an application within its Azure AD tenant, or within a verified custom domain if the application is multi-tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#identifier_uris Application#identifier_uris}

---

##### `LogoImage`<sup>Optional</sup> <a name="LogoImage" id="@cdktf/provider-azuread.application.ApplicationConfig.property.logoImage"></a>

```csharp
public string LogoImage { get; set; }
```

- *Type:* string

Base64 encoded logo image in gif, png or jpeg format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#logo_image Application#logo_image}

---

##### `MarketingUrl`<sup>Optional</sup> <a name="MarketingUrl" id="@cdktf/provider-azuread.application.ApplicationConfig.property.marketingUrl"></a>

```csharp
public string MarketingUrl { get; set; }
```

- *Type:* string

URL of the application's marketing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#marketing_url Application#marketing_url}

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktf/provider-azuread.application.ApplicationConfig.property.notes"></a>

```csharp
public string Notes { get; set; }
```

- *Type:* string

User-specified notes relevant for the management of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#notes Application#notes}

---

##### `Oauth2PostResponseRequired`<sup>Optional</sup> <a name="Oauth2PostResponseRequired" id="@cdktf/provider-azuread.application.ApplicationConfig.property.oauth2PostResponseRequired"></a>

```csharp
public object Oauth2PostResponseRequired { get; set; }
```

- *Type:* object

Specifies whether, as part of OAuth 2.0 token requests, Azure AD allows POST requests, as opposed to GET requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#oauth2_post_response_required Application#oauth2_post_response_required}

---

##### `OptionalClaims`<sup>Optional</sup> <a name="OptionalClaims" id="@cdktf/provider-azuread.application.ApplicationConfig.property.optionalClaims"></a>

```csharp
public ApplicationOptionalClaims OptionalClaims { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a>

optional_claims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#optional_claims Application#optional_claims}

---

##### `Owners`<sup>Optional</sup> <a name="Owners" id="@cdktf/provider-azuread.application.ApplicationConfig.property.owners"></a>

```csharp
public string[] Owners { get; set; }
```

- *Type:* string[]

A list of object IDs of principals that will be granted ownership of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#owners Application#owners}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azuread.application.ApplicationConfig.property.password"></a>

```csharp
public ApplicationPassword Password { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPassword">ApplicationPassword</a>

password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#password Application#password}

---

##### `PreventDuplicateNames`<sup>Optional</sup> <a name="PreventDuplicateNames" id="@cdktf/provider-azuread.application.ApplicationConfig.property.preventDuplicateNames"></a>

```csharp
public object PreventDuplicateNames { get; set; }
```

- *Type:* object

If `true`, will return an error if an existing application is found with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#prevent_duplicate_names Application#prevent_duplicate_names}

---

##### `PrivacyStatementUrl`<sup>Optional</sup> <a name="PrivacyStatementUrl" id="@cdktf/provider-azuread.application.ApplicationConfig.property.privacyStatementUrl"></a>

```csharp
public string PrivacyStatementUrl { get; set; }
```

- *Type:* string

URL of the application's privacy statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#privacy_statement_url Application#privacy_statement_url}

---

##### `PublicClient`<sup>Optional</sup> <a name="PublicClient" id="@cdktf/provider-azuread.application.ApplicationConfig.property.publicClient"></a>

```csharp
public ApplicationPublicClient PublicClient { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a>

public_client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#public_client Application#public_client}

---

##### `RequiredResourceAccess`<sup>Optional</sup> <a name="RequiredResourceAccess" id="@cdktf/provider-azuread.application.ApplicationConfig.property.requiredResourceAccess"></a>

```csharp
public object RequiredResourceAccess { get; set; }
```

- *Type:* object

required_resource_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#required_resource_access Application#required_resource_access}

---

##### `ServiceManagementReference`<sup>Optional</sup> <a name="ServiceManagementReference" id="@cdktf/provider-azuread.application.ApplicationConfig.property.serviceManagementReference"></a>

```csharp
public string ServiceManagementReference { get; set; }
```

- *Type:* string

References application or service contact information from a Service or Asset Management database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#service_management_reference Application#service_management_reference}

---

##### `SignInAudience`<sup>Optional</sup> <a name="SignInAudience" id="@cdktf/provider-azuread.application.ApplicationConfig.property.signInAudience"></a>

```csharp
public string SignInAudience { get; set; }
```

- *Type:* string

The Microsoft account types that are supported for the current application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#sign_in_audience Application#sign_in_audience}

---

##### `SinglePageApplication`<sup>Optional</sup> <a name="SinglePageApplication" id="@cdktf/provider-azuread.application.ApplicationConfig.property.singlePageApplication"></a>

```csharp
public ApplicationSinglePageApplication SinglePageApplication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a>

single_page_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#single_page_application Application#single_page_application}

---

##### `SupportUrl`<sup>Optional</sup> <a name="SupportUrl" id="@cdktf/provider-azuread.application.ApplicationConfig.property.supportUrl"></a>

```csharp
public string SupportUrl { get; set; }
```

- *Type:* string

URL of the application's support page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#support_url Application#support_url}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azuread.application.ApplicationConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

A set of tags to apply to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#tags Application#tags}

---

##### `TemplateId`<sup>Optional</sup> <a name="TemplateId" id="@cdktf/provider-azuread.application.ApplicationConfig.property.templateId"></a>

```csharp
public string TemplateId { get; set; }
```

- *Type:* string

Unique ID of the application template from which this application is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#template_id Application#template_id}

---

##### `TermsOfServiceUrl`<sup>Optional</sup> <a name="TermsOfServiceUrl" id="@cdktf/provider-azuread.application.ApplicationConfig.property.termsOfServiceUrl"></a>

```csharp
public string TermsOfServiceUrl { get; set; }
```

- *Type:* string

URL of the application's terms of service statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#terms_of_service_url Application#terms_of_service_url}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.application.ApplicationConfig.property.timeouts"></a>

```csharp
public ApplicationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#timeouts Application#timeouts}

---

##### `Web`<sup>Optional</sup> <a name="Web" id="@cdktf/provider-azuread.application.ApplicationConfig.property.web"></a>

```csharp
public ApplicationWeb Web { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a>

web block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#web Application#web}

---

### ApplicationFeatureTags <a name="ApplicationFeatureTags" id="@cdktf/provider-azuread.application.ApplicationFeatureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationFeatureTags {
    object CustomSingleSignOn = null,
    object Enterprise = null,
    object Gallery = null,
    object Hide = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags.property.customSingleSignOn">CustomSingleSignOn</a></code> | <code>object</code> | Whether this application represents a custom SAML application for linked service principals. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags.property.enterprise">Enterprise</a></code> | <code>object</code> | Whether this application represents an Enterprise Application for linked service principals. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags.property.gallery">Gallery</a></code> | <code>object</code> | Whether this application represents a gallery application for linked service principals. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags.property.hide">Hide</a></code> | <code>object</code> | Whether this application is invisible to users in My Apps and Office 365 Launcher. |

---

##### `CustomSingleSignOn`<sup>Optional</sup> <a name="CustomSingleSignOn" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.property.customSingleSignOn"></a>

```csharp
public object CustomSingleSignOn { get; set; }
```

- *Type:* object

Whether this application represents a custom SAML application for linked service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#custom_single_sign_on Application#custom_single_sign_on}

---

##### `Enterprise`<sup>Optional</sup> <a name="Enterprise" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.property.enterprise"></a>

```csharp
public object Enterprise { get; set; }
```

- *Type:* object

Whether this application represents an Enterprise Application for linked service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#enterprise Application#enterprise}

---

##### `Gallery`<sup>Optional</sup> <a name="Gallery" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.property.gallery"></a>

```csharp
public object Gallery { get; set; }
```

- *Type:* object

Whether this application represents a gallery application for linked service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#gallery Application#gallery}

---

##### `Hide`<sup>Optional</sup> <a name="Hide" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.property.hide"></a>

```csharp
public object Hide { get; set; }
```

- *Type:* object

Whether this application is invisible to users in My Apps and Office 365 Launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#hide Application#hide}

---

### ApplicationOptionalClaims <a name="ApplicationOptionalClaims" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaims {
    object AccessToken = null,
    object IdToken = null,
    object Saml2Token = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.accessToken">AccessToken</a></code> | <code>object</code> | access_token block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.idToken">IdToken</a></code> | <code>object</code> | id_token block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.saml2Token">Saml2Token</a></code> | <code>object</code> | saml2_token block. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.accessToken"></a>

```csharp
public object AccessToken { get; set; }
```

- *Type:* object

access_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#access_token Application#access_token}

---

##### `IdToken`<sup>Optional</sup> <a name="IdToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.idToken"></a>

```csharp
public object IdToken { get; set; }
```

- *Type:* object

id_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#id_token Application#id_token}

---

##### `Saml2Token`<sup>Optional</sup> <a name="Saml2Token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.saml2Token"></a>

```csharp
public object Saml2Token { get; set; }
```

- *Type:* object

saml2_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#saml2_token Application#saml2_token}

---

### ApplicationOptionalClaimsAccessToken <a name="ApplicationOptionalClaimsAccessToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaimsAccessToken {
    string Name,
    string[] AdditionalProperties = null,
    object Essential = null,
    string Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.name">Name</a></code> | <code>string</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.additionalProperties">AdditionalProperties</a></code> | <code>string[]</code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.essential">Essential</a></code> | <code>object</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.source">Source</a></code> | <code>string</code> | The source of the claim. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#name Application#name}

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.additionalProperties"></a>

```csharp
public string[] AdditionalProperties { get; set; }
```

- *Type:* string[]

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#additional_properties Application#additional_properties}

---

##### `Essential`<sup>Optional</sup> <a name="Essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.essential"></a>

```csharp
public object Essential { get; set; }
```

- *Type:* object

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#essential Application#essential}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#source Application#source}

---

### ApplicationOptionalClaimsIdToken <a name="ApplicationOptionalClaimsIdToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaimsIdToken {
    string Name,
    string[] AdditionalProperties = null,
    object Essential = null,
    string Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.name">Name</a></code> | <code>string</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.additionalProperties">AdditionalProperties</a></code> | <code>string[]</code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.essential">Essential</a></code> | <code>object</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.source">Source</a></code> | <code>string</code> | The source of the claim. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#name Application#name}

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.additionalProperties"></a>

```csharp
public string[] AdditionalProperties { get; set; }
```

- *Type:* string[]

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#additional_properties Application#additional_properties}

---

##### `Essential`<sup>Optional</sup> <a name="Essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.essential"></a>

```csharp
public object Essential { get; set; }
```

- *Type:* object

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#essential Application#essential}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#source Application#source}

---

### ApplicationOptionalClaimsSaml2Token <a name="ApplicationOptionalClaimsSaml2Token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaimsSaml2Token {
    string Name,
    string[] AdditionalProperties = null,
    object Essential = null,
    string Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.name">Name</a></code> | <code>string</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.additionalProperties">AdditionalProperties</a></code> | <code>string[]</code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.essential">Essential</a></code> | <code>object</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.source">Source</a></code> | <code>string</code> | The source of the claim. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#name Application#name}

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.additionalProperties"></a>

```csharp
public string[] AdditionalProperties { get; set; }
```

- *Type:* string[]

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#additional_properties Application#additional_properties}

---

##### `Essential`<sup>Optional</sup> <a name="Essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.essential"></a>

```csharp
public object Essential { get; set; }
```

- *Type:* object

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#essential Application#essential}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#source Application#source}

---

### ApplicationPassword <a name="ApplicationPassword" id="@cdktf/provider-azuread.application.ApplicationPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationPassword.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationPassword {
    string DisplayName,
    string EndDate = null,
    string StartDate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPassword.property.displayName">DisplayName</a></code> | <code>string</code> | A display name for the password. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPassword.property.endDate">EndDate</a></code> | <code>string</code> | The end date until which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPassword.property.startDate">StartDate</a></code> | <code>string</code> | The start date from which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date is used. |

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.application.ApplicationPassword.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A display name for the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#display_name Application#display_name}

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktf/provider-azuread.application.ApplicationPassword.property.endDate"></a>

```csharp
public string EndDate { get; set; }
```

- *Type:* string

The end date until which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#end_date Application#end_date}

---

##### `StartDate`<sup>Optional</sup> <a name="StartDate" id="@cdktf/provider-azuread.application.ApplicationPassword.property.startDate"></a>

```csharp
public string StartDate { get; set; }
```

- *Type:* string

The start date from which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#start_date Application#start_date}

---

### ApplicationPublicClient <a name="ApplicationPublicClient" id="@cdktf/provider-azuread.application.ApplicationPublicClient"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationPublicClient.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationPublicClient {
    string[] RedirectUris = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClient.property.redirectUris">RedirectUris</a></code> | <code>string[]</code> | The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent. |

---

##### `RedirectUris`<sup>Optional</sup> <a name="RedirectUris" id="@cdktf/provider-azuread.application.ApplicationPublicClient.property.redirectUris"></a>

```csharp
public string[] RedirectUris { get; set; }
```

- *Type:* string[]

The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#redirect_uris Application#redirect_uris}

---

### ApplicationRequiredResourceAccess <a name="ApplicationRequiredResourceAccess" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationRequiredResourceAccess {
    object ResourceAccess,
    string ResourceAppId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.property.resourceAccess">ResourceAccess</a></code> | <code>object</code> | resource_access block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.property.resourceAppId">ResourceAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#resource_app_id Application#resource_app_id}. |

---

##### `ResourceAccess`<sup>Required</sup> <a name="ResourceAccess" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.property.resourceAccess"></a>

```csharp
public object ResourceAccess { get; set; }
```

- *Type:* object

resource_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#resource_access Application#resource_access}

---

##### `ResourceAppId`<sup>Required</sup> <a name="ResourceAppId" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.property.resourceAppId"></a>

```csharp
public string ResourceAppId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#resource_app_id Application#resource_app_id}.

---

### ApplicationRequiredResourceAccessResourceAccess <a name="ApplicationRequiredResourceAccessResourceAccess" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationRequiredResourceAccessResourceAccess {
    string Id,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#id Application#id}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#type Application#type}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#id Application#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#type Application#type}.

---

### ApplicationSinglePageApplication <a name="ApplicationSinglePageApplication" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationSinglePageApplication {
    string[] RedirectUris = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication.property.redirectUris">RedirectUris</a></code> | <code>string[]</code> | The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent. |

---

##### `RedirectUris`<sup>Optional</sup> <a name="RedirectUris" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplication.property.redirectUris"></a>

```csharp
public string[] RedirectUris { get; set; }
```

- *Type:* string[]

The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#redirect_uris Application#redirect_uris}

---

### ApplicationTimeouts <a name="ApplicationTimeouts" id="@cdktf/provider-azuread.application.ApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#create Application#create}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#delete Application#delete}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#read Application#read}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#update Application#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.application.ApplicationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#create Application#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.application.ApplicationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#delete Application#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.application.ApplicationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#read Application#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.application.ApplicationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#update Application#update}.

---

### ApplicationWeb <a name="ApplicationWeb" id="@cdktf/provider-azuread.application.ApplicationWeb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationWeb.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationWeb {
    string HomepageUrl = null,
    ApplicationWebImplicitGrant ImplicitGrant = null,
    string LogoutUrl = null,
    string[] RedirectUris = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb.property.homepageUrl">HomepageUrl</a></code> | <code>string</code> | Home page or landing page of the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb.property.implicitGrant">ImplicitGrant</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a></code> | implicit_grant block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb.property.logoutUrl">LogoutUrl</a></code> | <code>string</code> | The URL that will be used by Microsoft's authorization service to sign out a user using front-channel, back-channel or SAML logout protocols. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb.property.redirectUris">RedirectUris</a></code> | <code>string[]</code> | The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent. |

---

##### `HomepageUrl`<sup>Optional</sup> <a name="HomepageUrl" id="@cdktf/provider-azuread.application.ApplicationWeb.property.homepageUrl"></a>

```csharp
public string HomepageUrl { get; set; }
```

- *Type:* string

Home page or landing page of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#homepage_url Application#homepage_url}

---

##### `ImplicitGrant`<sup>Optional</sup> <a name="ImplicitGrant" id="@cdktf/provider-azuread.application.ApplicationWeb.property.implicitGrant"></a>

```csharp
public ApplicationWebImplicitGrant ImplicitGrant { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a>

implicit_grant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#implicit_grant Application#implicit_grant}

---

##### `LogoutUrl`<sup>Optional</sup> <a name="LogoutUrl" id="@cdktf/provider-azuread.application.ApplicationWeb.property.logoutUrl"></a>

```csharp
public string LogoutUrl { get; set; }
```

- *Type:* string

The URL that will be used by Microsoft's authorization service to sign out a user using front-channel, back-channel or SAML logout protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#logout_url Application#logout_url}

---

##### `RedirectUris`<sup>Optional</sup> <a name="RedirectUris" id="@cdktf/provider-azuread.application.ApplicationWeb.property.redirectUris"></a>

```csharp
public string[] RedirectUris { get; set; }
```

- *Type:* string[]

The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#redirect_uris Application#redirect_uris}

---

### ApplicationWebImplicitGrant <a name="ApplicationWebImplicitGrant" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationWebImplicitGrant {
    object AccessTokenIssuanceEnabled = null,
    object IdTokenIssuanceEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.property.accessTokenIssuanceEnabled">AccessTokenIssuanceEnabled</a></code> | <code>object</code> | Whether this web application can request an access token using OAuth 2.0 implicit flow. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.property.idTokenIssuanceEnabled">IdTokenIssuanceEnabled</a></code> | <code>object</code> | Whether this web application can request an ID token using OAuth 2.0 implicit flow. |

---

##### `AccessTokenIssuanceEnabled`<sup>Optional</sup> <a name="AccessTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.property.accessTokenIssuanceEnabled"></a>

```csharp
public object AccessTokenIssuanceEnabled { get; set; }
```

- *Type:* object

Whether this web application can request an access token using OAuth 2.0 implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#access_token_issuance_enabled Application#access_token_issuance_enabled}

---

##### `IdTokenIssuanceEnabled`<sup>Optional</sup> <a name="IdTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.property.idTokenIssuanceEnabled"></a>

```csharp
public object IdTokenIssuanceEnabled { get; set; }
```

- *Type:* object

Whether this web application can request an ID token using OAuth 2.0 implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application#id_token_issuance_enabled Application#id_token_issuance_enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationApiOauth2PermissionScopeList <a name="ApplicationApiOauth2PermissionScopeList" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationApiOauth2PermissionScopeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.get"></a>

```csharp
private ApplicationApiOauth2PermissionScopeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationApiOauth2PermissionScopeOutputReference <a name="ApplicationApiOauth2PermissionScopeOutputReference" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationApiOauth2PermissionScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetAdminConsentDescription">ResetAdminConsentDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetAdminConsentDisplayName">ResetAdminConsentDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetUserConsentDescription">ResetUserConsentDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetUserConsentDisplayName">ResetUserConsentDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdminConsentDescription` <a name="ResetAdminConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetAdminConsentDescription"></a>

```csharp
private void ResetAdminConsentDescription()
```

##### `ResetAdminConsentDisplayName` <a name="ResetAdminConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetAdminConsentDisplayName"></a>

```csharp
private void ResetAdminConsentDisplayName()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUserConsentDescription` <a name="ResetUserConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetUserConsentDescription"></a>

```csharp
private void ResetUserConsentDescription()
```

##### `ResetUserConsentDisplayName` <a name="ResetUserConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetUserConsentDisplayName"></a>

```csharp
private void ResetUserConsentDisplayName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDescriptionInput">AdminConsentDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDisplayNameInput">AdminConsentDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDescriptionInput">UserConsentDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDisplayNameInput">UserConsentDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDescription">AdminConsentDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDisplayName">AdminConsentDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDescription">UserConsentDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDisplayName">UserConsentDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminConsentDescriptionInput`<sup>Optional</sup> <a name="AdminConsentDescriptionInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDescriptionInput"></a>

```csharp
public string AdminConsentDescriptionInput { get; }
```

- *Type:* string

---

##### `AdminConsentDisplayNameInput`<sup>Optional</sup> <a name="AdminConsentDisplayNameInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDisplayNameInput"></a>

```csharp
public string AdminConsentDisplayNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UserConsentDescriptionInput`<sup>Optional</sup> <a name="UserConsentDescriptionInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDescriptionInput"></a>

```csharp
public string UserConsentDescriptionInput { get; }
```

- *Type:* string

---

##### `UserConsentDisplayNameInput`<sup>Optional</sup> <a name="UserConsentDisplayNameInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDisplayNameInput"></a>

```csharp
public string UserConsentDisplayNameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `AdminConsentDescription`<sup>Required</sup> <a name="AdminConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDescription"></a>

```csharp
public string AdminConsentDescription { get; }
```

- *Type:* string

---

##### `AdminConsentDisplayName`<sup>Required</sup> <a name="AdminConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDisplayName"></a>

```csharp
public string AdminConsentDisplayName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserConsentDescription`<sup>Required</sup> <a name="UserConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDescription"></a>

```csharp
public string UserConsentDescription { get; }
```

- *Type:* string

---

##### `UserConsentDisplayName`<sup>Required</sup> <a name="UserConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDisplayName"></a>

```csharp
public string UserConsentDisplayName { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationApiOutputReference <a name="ApplicationApiOutputReference" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationApiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.putOauth2PermissionScope">PutOauth2PermissionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetKnownClientApplications">ResetKnownClientApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetMappedClaimsEnabled">ResetMappedClaimsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetOauth2PermissionScope">ResetOauth2PermissionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetRequestedAccessTokenVersion">ResetRequestedAccessTokenVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOauth2PermissionScope` <a name="PutOauth2PermissionScope" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.putOauth2PermissionScope"></a>

```csharp
private void PutOauth2PermissionScope(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.putOauth2PermissionScope.parameter.value"></a>

- *Type:* object

---

##### `ResetKnownClientApplications` <a name="ResetKnownClientApplications" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetKnownClientApplications"></a>

```csharp
private void ResetKnownClientApplications()
```

##### `ResetMappedClaimsEnabled` <a name="ResetMappedClaimsEnabled" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetMappedClaimsEnabled"></a>

```csharp
private void ResetMappedClaimsEnabled()
```

##### `ResetOauth2PermissionScope` <a name="ResetOauth2PermissionScope" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetOauth2PermissionScope"></a>

```csharp
private void ResetOauth2PermissionScope()
```

##### `ResetRequestedAccessTokenVersion` <a name="ResetRequestedAccessTokenVersion" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetRequestedAccessTokenVersion"></a>

```csharp
private void ResetRequestedAccessTokenVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.oauth2PermissionScope">Oauth2PermissionScope</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList">ApplicationApiOauth2PermissionScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.knownClientApplicationsInput">KnownClientApplicationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.mappedClaimsEnabledInput">MappedClaimsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.oauth2PermissionScopeInput">Oauth2PermissionScopeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.requestedAccessTokenVersionInput">RequestedAccessTokenVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.knownClientApplications">KnownClientApplications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.mappedClaimsEnabled">MappedClaimsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.requestedAccessTokenVersion">RequestedAccessTokenVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Oauth2PermissionScope`<sup>Required</sup> <a name="Oauth2PermissionScope" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.oauth2PermissionScope"></a>

```csharp
public ApplicationApiOauth2PermissionScopeList Oauth2PermissionScope { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList">ApplicationApiOauth2PermissionScopeList</a>

---

##### `KnownClientApplicationsInput`<sup>Optional</sup> <a name="KnownClientApplicationsInput" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.knownClientApplicationsInput"></a>

```csharp
public string[] KnownClientApplicationsInput { get; }
```

- *Type:* string[]

---

##### `MappedClaimsEnabledInput`<sup>Optional</sup> <a name="MappedClaimsEnabledInput" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.mappedClaimsEnabledInput"></a>

```csharp
public object MappedClaimsEnabledInput { get; }
```

- *Type:* object

---

##### `Oauth2PermissionScopeInput`<sup>Optional</sup> <a name="Oauth2PermissionScopeInput" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.oauth2PermissionScopeInput"></a>

```csharp
public object Oauth2PermissionScopeInput { get; }
```

- *Type:* object

---

##### `RequestedAccessTokenVersionInput`<sup>Optional</sup> <a name="RequestedAccessTokenVersionInput" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.requestedAccessTokenVersionInput"></a>

```csharp
public double RequestedAccessTokenVersionInput { get; }
```

- *Type:* double

---

##### `KnownClientApplications`<sup>Required</sup> <a name="KnownClientApplications" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.knownClientApplications"></a>

```csharp
public string[] KnownClientApplications { get; }
```

- *Type:* string[]

---

##### `MappedClaimsEnabled`<sup>Required</sup> <a name="MappedClaimsEnabled" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.mappedClaimsEnabled"></a>

```csharp
public object MappedClaimsEnabled { get; }
```

- *Type:* object

---

##### `RequestedAccessTokenVersion`<sup>Required</sup> <a name="RequestedAccessTokenVersion" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.requestedAccessTokenVersion"></a>

```csharp
public double RequestedAccessTokenVersion { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.internalValue"></a>

```csharp
public ApplicationApi InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a>

---


### ApplicationAppRoleList <a name="ApplicationAppRoleList" id="@cdktf/provider-azuread.application.ApplicationAppRoleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationAppRoleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.get"></a>

```csharp
private ApplicationAppRoleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationAppRoleOutputReference <a name="ApplicationAppRoleOutputReference" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationAppRoleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.allowedMemberTypesInput">AllowedMemberTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.allowedMemberTypes">AllowedMemberTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedMemberTypesInput`<sup>Optional</sup> <a name="AllowedMemberTypesInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.allowedMemberTypesInput"></a>

```csharp
public string[] AllowedMemberTypesInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `AllowedMemberTypes`<sup>Required</sup> <a name="AllowedMemberTypes" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.allowedMemberTypes"></a>

```csharp
public string[] AllowedMemberTypes { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationFeatureTagsList <a name="ApplicationFeatureTagsList" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationFeatureTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.get"></a>

```csharp
private ApplicationFeatureTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationFeatureTagsOutputReference <a name="ApplicationFeatureTagsOutputReference" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationFeatureTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetCustomSingleSignOn">ResetCustomSingleSignOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetEnterprise">ResetEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetGallery">ResetGallery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetHide">ResetHide</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomSingleSignOn` <a name="ResetCustomSingleSignOn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetCustomSingleSignOn"></a>

```csharp
private void ResetCustomSingleSignOn()
```

##### `ResetEnterprise` <a name="ResetEnterprise" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetEnterprise"></a>

```csharp
private void ResetEnterprise()
```

##### `ResetGallery` <a name="ResetGallery" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetGallery"></a>

```csharp
private void ResetGallery()
```

##### `ResetHide` <a name="ResetHide" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetHide"></a>

```csharp
private void ResetHide()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.customSingleSignOnInput">CustomSingleSignOnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.enterpriseInput">EnterpriseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.galleryInput">GalleryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.hideInput">HideInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.customSingleSignOn">CustomSingleSignOn</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.enterprise">Enterprise</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.gallery">Gallery</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.hide">Hide</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomSingleSignOnInput`<sup>Optional</sup> <a name="CustomSingleSignOnInput" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.customSingleSignOnInput"></a>

```csharp
public object CustomSingleSignOnInput { get; }
```

- *Type:* object

---

##### `EnterpriseInput`<sup>Optional</sup> <a name="EnterpriseInput" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.enterpriseInput"></a>

```csharp
public object EnterpriseInput { get; }
```

- *Type:* object

---

##### `GalleryInput`<sup>Optional</sup> <a name="GalleryInput" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.galleryInput"></a>

```csharp
public object GalleryInput { get; }
```

- *Type:* object

---

##### `HideInput`<sup>Optional</sup> <a name="HideInput" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.hideInput"></a>

```csharp
public object HideInput { get; }
```

- *Type:* object

---

##### `CustomSingleSignOn`<sup>Required</sup> <a name="CustomSingleSignOn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.customSingleSignOn"></a>

```csharp
public object CustomSingleSignOn { get; }
```

- *Type:* object

---

##### `Enterprise`<sup>Required</sup> <a name="Enterprise" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.enterprise"></a>

```csharp
public object Enterprise { get; }
```

- *Type:* object

---

##### `Gallery`<sup>Required</sup> <a name="Gallery" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.gallery"></a>

```csharp
public object Gallery { get; }
```

- *Type:* object

---

##### `Hide`<sup>Required</sup> <a name="Hide" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.hide"></a>

```csharp
public object Hide { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationOptionalClaimsAccessTokenList <a name="ApplicationOptionalClaimsAccessTokenList" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaimsAccessTokenList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.get"></a>

```csharp
private ApplicationOptionalClaimsAccessTokenOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationOptionalClaimsAccessTokenOutputReference <a name="ApplicationOptionalClaimsAccessTokenOutputReference" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaimsAccessTokenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetEssential">ResetEssential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetAdditionalProperties"></a>

```csharp
private void ResetAdditionalProperties()
```

##### `ResetEssential` <a name="ResetEssential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetEssential"></a>

```csharp
private void ResetEssential()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.essentialInput">EssentialInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.additionalProperties">AdditionalProperties</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.essential">Essential</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.additionalPropertiesInput"></a>

```csharp
public string[] AdditionalPropertiesInput { get; }
```

- *Type:* string[]

---

##### `EssentialInput`<sup>Optional</sup> <a name="EssentialInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.essentialInput"></a>

```csharp
public object EssentialInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.additionalProperties"></a>

```csharp
public string[] AdditionalProperties { get; }
```

- *Type:* string[]

---

##### `Essential`<sup>Required</sup> <a name="Essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.essential"></a>

```csharp
public object Essential { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationOptionalClaimsIdTokenList <a name="ApplicationOptionalClaimsIdTokenList" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaimsIdTokenList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.get"></a>

```csharp
private ApplicationOptionalClaimsIdTokenOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationOptionalClaimsIdTokenOutputReference <a name="ApplicationOptionalClaimsIdTokenOutputReference" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaimsIdTokenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetEssential">ResetEssential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetAdditionalProperties"></a>

```csharp
private void ResetAdditionalProperties()
```

##### `ResetEssential` <a name="ResetEssential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetEssential"></a>

```csharp
private void ResetEssential()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.essentialInput">EssentialInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.additionalProperties">AdditionalProperties</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.essential">Essential</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.additionalPropertiesInput"></a>

```csharp
public string[] AdditionalPropertiesInput { get; }
```

- *Type:* string[]

---

##### `EssentialInput`<sup>Optional</sup> <a name="EssentialInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.essentialInput"></a>

```csharp
public object EssentialInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.additionalProperties"></a>

```csharp
public string[] AdditionalProperties { get; }
```

- *Type:* string[]

---

##### `Essential`<sup>Required</sup> <a name="Essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.essential"></a>

```csharp
public object Essential { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationOptionalClaimsOutputReference <a name="ApplicationOptionalClaimsOutputReference" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaimsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putAccessToken">PutAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putIdToken">PutIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putSaml2Token">PutSaml2Token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetIdToken">ResetIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetSaml2Token">ResetSaml2Token</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessToken` <a name="PutAccessToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putAccessToken"></a>

```csharp
private void PutAccessToken(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putAccessToken.parameter.value"></a>

- *Type:* object

---

##### `PutIdToken` <a name="PutIdToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putIdToken"></a>

```csharp
private void PutIdToken(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putIdToken.parameter.value"></a>

- *Type:* object

---

##### `PutSaml2Token` <a name="PutSaml2Token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putSaml2Token"></a>

```csharp
private void PutSaml2Token(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putSaml2Token.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetAccessToken"></a>

```csharp
private void ResetAccessToken()
```

##### `ResetIdToken` <a name="ResetIdToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetIdToken"></a>

```csharp
private void ResetIdToken()
```

##### `ResetSaml2Token` <a name="ResetSaml2Token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetSaml2Token"></a>

```csharp
private void ResetSaml2Token()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.accessToken">AccessToken</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList">ApplicationOptionalClaimsAccessTokenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.idToken">IdToken</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList">ApplicationOptionalClaimsIdTokenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.saml2Token">Saml2Token</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList">ApplicationOptionalClaimsSaml2TokenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.idTokenInput">IdTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.saml2TokenInput">Saml2TokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.accessToken"></a>

```csharp
public ApplicationOptionalClaimsAccessTokenList AccessToken { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList">ApplicationOptionalClaimsAccessTokenList</a>

---

##### `IdToken`<sup>Required</sup> <a name="IdToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.idToken"></a>

```csharp
public ApplicationOptionalClaimsIdTokenList IdToken { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList">ApplicationOptionalClaimsIdTokenList</a>

---

##### `Saml2Token`<sup>Required</sup> <a name="Saml2Token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.saml2Token"></a>

```csharp
public ApplicationOptionalClaimsSaml2TokenList Saml2Token { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList">ApplicationOptionalClaimsSaml2TokenList</a>

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.accessTokenInput"></a>

```csharp
public object AccessTokenInput { get; }
```

- *Type:* object

---

##### `IdTokenInput`<sup>Optional</sup> <a name="IdTokenInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.idTokenInput"></a>

```csharp
public object IdTokenInput { get; }
```

- *Type:* object

---

##### `Saml2TokenInput`<sup>Optional</sup> <a name="Saml2TokenInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.saml2TokenInput"></a>

```csharp
public object Saml2TokenInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.internalValue"></a>

```csharp
public ApplicationOptionalClaims InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a>

---


### ApplicationOptionalClaimsSaml2TokenList <a name="ApplicationOptionalClaimsSaml2TokenList" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaimsSaml2TokenList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.get"></a>

```csharp
private ApplicationOptionalClaimsSaml2TokenOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationOptionalClaimsSaml2TokenOutputReference <a name="ApplicationOptionalClaimsSaml2TokenOutputReference" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaimsSaml2TokenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetEssential">ResetEssential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetAdditionalProperties"></a>

```csharp
private void ResetAdditionalProperties()
```

##### `ResetEssential` <a name="ResetEssential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetEssential"></a>

```csharp
private void ResetEssential()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.essentialInput">EssentialInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.additionalProperties">AdditionalProperties</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.essential">Essential</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.additionalPropertiesInput"></a>

```csharp
public string[] AdditionalPropertiesInput { get; }
```

- *Type:* string[]

---

##### `EssentialInput`<sup>Optional</sup> <a name="EssentialInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.essentialInput"></a>

```csharp
public object EssentialInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.additionalProperties"></a>

```csharp
public string[] AdditionalProperties { get; }
```

- *Type:* string[]

---

##### `Essential`<sup>Required</sup> <a name="Essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.essential"></a>

```csharp
public object Essential { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationPasswordOutputReference <a name="ApplicationPasswordOutputReference" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationPasswordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.resetStartDate">ResetStartDate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.resetEndDate"></a>

```csharp
private void ResetEndDate()
```

##### `ResetStartDate` <a name="ResetStartDate" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.resetStartDate"></a>

```csharp
private void ResetStartDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.property.endDateInput">EndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.property.startDateInput">StartDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPassword">ApplicationPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.property.endDateInput"></a>

```csharp
public string EndDateInput { get; }
```

- *Type:* string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.property.startDateInput"></a>

```csharp
public string StartDateInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationPasswordOutputReference.property.internalValue"></a>

```csharp
public ApplicationPassword InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPassword">ApplicationPassword</a>

---


### ApplicationPublicClientOutputReference <a name="ApplicationPublicClientOutputReference" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationPublicClientOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resetRedirectUris">ResetRedirectUris</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRedirectUris` <a name="ResetRedirectUris" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resetRedirectUris"></a>

```csharp
private void ResetRedirectUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.redirectUrisInput">RedirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.redirectUris">RedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RedirectUrisInput`<sup>Optional</sup> <a name="RedirectUrisInput" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.redirectUrisInput"></a>

```csharp
public string[] RedirectUrisInput { get; }
```

- *Type:* string[]

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.redirectUris"></a>

```csharp
public string[] RedirectUris { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.internalValue"></a>

```csharp
public ApplicationPublicClient InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a>

---


### ApplicationRequiredResourceAccessList <a name="ApplicationRequiredResourceAccessList" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationRequiredResourceAccessList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.get"></a>

```csharp
private ApplicationRequiredResourceAccessOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationRequiredResourceAccessOutputReference <a name="ApplicationRequiredResourceAccessOutputReference" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationRequiredResourceAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.putResourceAccess">PutResourceAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceAccess` <a name="PutResourceAccess" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.putResourceAccess"></a>

```csharp
private void PutResourceAccess(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.putResourceAccess.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAccess">ResourceAccess</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList">ApplicationRequiredResourceAccessResourceAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAccessInput">ResourceAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAppIdInput">ResourceAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAppId">ResourceAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceAccess`<sup>Required</sup> <a name="ResourceAccess" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAccess"></a>

```csharp
public ApplicationRequiredResourceAccessResourceAccessList ResourceAccess { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList">ApplicationRequiredResourceAccessResourceAccessList</a>

---

##### `ResourceAccessInput`<sup>Optional</sup> <a name="ResourceAccessInput" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAccessInput"></a>

```csharp
public object ResourceAccessInput { get; }
```

- *Type:* object

---

##### `ResourceAppIdInput`<sup>Optional</sup> <a name="ResourceAppIdInput" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAppIdInput"></a>

```csharp
public string ResourceAppIdInput { get; }
```

- *Type:* string

---

##### `ResourceAppId`<sup>Required</sup> <a name="ResourceAppId" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAppId"></a>

```csharp
public string ResourceAppId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationRequiredResourceAccessResourceAccessList <a name="ApplicationRequiredResourceAccessResourceAccessList" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationRequiredResourceAccessResourceAccessList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.get"></a>

```csharp
private ApplicationRequiredResourceAccessResourceAccessOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationRequiredResourceAccessResourceAccessOutputReference <a name="ApplicationRequiredResourceAccessResourceAccessOutputReference" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationRequiredResourceAccessResourceAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationSinglePageApplicationOutputReference <a name="ApplicationSinglePageApplicationOutputReference" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationSinglePageApplicationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resetRedirectUris">ResetRedirectUris</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRedirectUris` <a name="ResetRedirectUris" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resetRedirectUris"></a>

```csharp
private void ResetRedirectUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.redirectUrisInput">RedirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.redirectUris">RedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RedirectUrisInput`<sup>Optional</sup> <a name="RedirectUrisInput" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.redirectUrisInput"></a>

```csharp
public string[] RedirectUrisInput { get; }
```

- *Type:* string[]

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.redirectUris"></a>

```csharp
public string[] RedirectUris { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.internalValue"></a>

```csharp
public ApplicationSinglePageApplication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a>

---


### ApplicationTimeoutsOutputReference <a name="ApplicationTimeoutsOutputReference" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationWebImplicitGrantOutputReference <a name="ApplicationWebImplicitGrantOutputReference" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationWebImplicitGrantOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resetAccessTokenIssuanceEnabled">ResetAccessTokenIssuanceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resetIdTokenIssuanceEnabled">ResetIdTokenIssuanceEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessTokenIssuanceEnabled` <a name="ResetAccessTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resetAccessTokenIssuanceEnabled"></a>

```csharp
private void ResetAccessTokenIssuanceEnabled()
```

##### `ResetIdTokenIssuanceEnabled` <a name="ResetIdTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resetIdTokenIssuanceEnabled"></a>

```csharp
private void ResetIdTokenIssuanceEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.accessTokenIssuanceEnabledInput">AccessTokenIssuanceEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.idTokenIssuanceEnabledInput">IdTokenIssuanceEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.accessTokenIssuanceEnabled">AccessTokenIssuanceEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.idTokenIssuanceEnabled">IdTokenIssuanceEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessTokenIssuanceEnabledInput`<sup>Optional</sup> <a name="AccessTokenIssuanceEnabledInput" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.accessTokenIssuanceEnabledInput"></a>

```csharp
public object AccessTokenIssuanceEnabledInput { get; }
```

- *Type:* object

---

##### `IdTokenIssuanceEnabledInput`<sup>Optional</sup> <a name="IdTokenIssuanceEnabledInput" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.idTokenIssuanceEnabledInput"></a>

```csharp
public object IdTokenIssuanceEnabledInput { get; }
```

- *Type:* object

---

##### `AccessTokenIssuanceEnabled`<sup>Required</sup> <a name="AccessTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.accessTokenIssuanceEnabled"></a>

```csharp
public object AccessTokenIssuanceEnabled { get; }
```

- *Type:* object

---

##### `IdTokenIssuanceEnabled`<sup>Required</sup> <a name="IdTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.idTokenIssuanceEnabled"></a>

```csharp
public object IdTokenIssuanceEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.internalValue"></a>

```csharp
public ApplicationWebImplicitGrant InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a>

---


### ApplicationWebOutputReference <a name="ApplicationWebOutputReference" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationWebOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.putImplicitGrant">PutImplicitGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetHomepageUrl">ResetHomepageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetImplicitGrant">ResetImplicitGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetLogoutUrl">ResetLogoutUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetRedirectUris">ResetRedirectUris</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutImplicitGrant` <a name="PutImplicitGrant" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.putImplicitGrant"></a>

```csharp
private void PutImplicitGrant(ApplicationWebImplicitGrant Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.putImplicitGrant.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a>

---

##### `ResetHomepageUrl` <a name="ResetHomepageUrl" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetHomepageUrl"></a>

```csharp
private void ResetHomepageUrl()
```

##### `ResetImplicitGrant` <a name="ResetImplicitGrant" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetImplicitGrant"></a>

```csharp
private void ResetImplicitGrant()
```

##### `ResetLogoutUrl` <a name="ResetLogoutUrl" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetLogoutUrl"></a>

```csharp
private void ResetLogoutUrl()
```

##### `ResetRedirectUris` <a name="ResetRedirectUris" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetRedirectUris"></a>

```csharp
private void ResetRedirectUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.implicitGrant">ImplicitGrant</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference">ApplicationWebImplicitGrantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.homepageUrlInput">HomepageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.implicitGrantInput">ImplicitGrantInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.logoutUrlInput">LogoutUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.redirectUrisInput">RedirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.homepageUrl">HomepageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.logoutUrl">LogoutUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.redirectUris">RedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImplicitGrant`<sup>Required</sup> <a name="ImplicitGrant" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.implicitGrant"></a>

```csharp
public ApplicationWebImplicitGrantOutputReference ImplicitGrant { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference">ApplicationWebImplicitGrantOutputReference</a>

---

##### `HomepageUrlInput`<sup>Optional</sup> <a name="HomepageUrlInput" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.homepageUrlInput"></a>

```csharp
public string HomepageUrlInput { get; }
```

- *Type:* string

---

##### `ImplicitGrantInput`<sup>Optional</sup> <a name="ImplicitGrantInput" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.implicitGrantInput"></a>

```csharp
public ApplicationWebImplicitGrant ImplicitGrantInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a>

---

##### `LogoutUrlInput`<sup>Optional</sup> <a name="LogoutUrlInput" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.logoutUrlInput"></a>

```csharp
public string LogoutUrlInput { get; }
```

- *Type:* string

---

##### `RedirectUrisInput`<sup>Optional</sup> <a name="RedirectUrisInput" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.redirectUrisInput"></a>

```csharp
public string[] RedirectUrisInput { get; }
```

- *Type:* string[]

---

##### `HomepageUrl`<sup>Required</sup> <a name="HomepageUrl" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.homepageUrl"></a>

```csharp
public string HomepageUrl { get; }
```

- *Type:* string

---

##### `LogoutUrl`<sup>Required</sup> <a name="LogoutUrl" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.logoutUrl"></a>

```csharp
public string LogoutUrl { get; }
```

- *Type:* string

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.redirectUris"></a>

```csharp
public string[] RedirectUris { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.internalValue"></a>

```csharp
public ApplicationWeb InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a>

---



