# `azuread_application_password`

Refer to the Terraform Registory for docs: [`azuread_application_password`](https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_password).

# `applicationPassword` Submodule <a name="`applicationPassword` Submodule" id="@cdktf/provider-azuread.applicationPassword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationPassword <a name="ApplicationPassword" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_password azuread_application_password}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationPassword(Construct Scope, string Id, ApplicationPasswordConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig">ApplicationPasswordConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig">ApplicationPasswordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.resetApplicationId">ResetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.resetApplicationObjectId">ResetApplicationObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.resetEndDateRelative">ResetEndDateRelative</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.resetRotateWhenChanged">ResetRotateWhenChanged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.resetStartDate">ResetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.putTimeouts"></a>

```csharp
private void PutTimeouts(ApplicationPasswordTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts">ApplicationPasswordTimeouts</a>

---

##### `ResetApplicationId` <a name="ResetApplicationId" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.resetApplicationId"></a>

```csharp
private void ResetApplicationId()
```

##### `ResetApplicationObjectId` <a name="ResetApplicationObjectId" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.resetApplicationObjectId"></a>

```csharp
private void ResetApplicationObjectId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.resetEndDate"></a>

```csharp
private void ResetEndDate()
```

##### `ResetEndDateRelative` <a name="ResetEndDateRelative" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.resetEndDateRelative"></a>

```csharp
private void ResetEndDateRelative()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRotateWhenChanged` <a name="ResetRotateWhenChanged" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.resetRotateWhenChanged"></a>

```csharp
private void ResetRotateWhenChanged()
```

##### `ResetStartDate` <a name="ResetStartDate" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.resetStartDate"></a>

```csharp
private void ResetStartDate()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationPassword resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ApplicationPassword.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ApplicationPassword.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ApplicationPassword.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ApplicationPassword.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApplicationPassword resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationPassword to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationPassword that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_password#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationPassword to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference">ApplicationPasswordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.applicationObjectIdInput">ApplicationObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.endDateInput">EndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.endDateRelativeInput">EndDateRelativeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.rotateWhenChangedInput">RotateWhenChangedInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.startDateInput">StartDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.applicationObjectId">ApplicationObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.endDateRelative">EndDateRelative</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.rotateWhenChanged">RotateWhenChanged</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.timeouts"></a>

```csharp
public ApplicationPasswordTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference">ApplicationPasswordTimeoutsOutputReference</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `ApplicationObjectIdInput`<sup>Optional</sup> <a name="ApplicationObjectIdInput" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.applicationObjectIdInput"></a>

```csharp
public string ApplicationObjectIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.endDateInput"></a>

```csharp
public string EndDateInput { get; }
```

- *Type:* string

---

##### `EndDateRelativeInput`<sup>Optional</sup> <a name="EndDateRelativeInput" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.endDateRelativeInput"></a>

```csharp
public string EndDateRelativeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RotateWhenChangedInput`<sup>Optional</sup> <a name="RotateWhenChangedInput" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.rotateWhenChangedInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RotateWhenChangedInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.startDateInput"></a>

```csharp
public string StartDateInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `ApplicationObjectId`<sup>Required</sup> <a name="ApplicationObjectId" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.applicationObjectId"></a>

```csharp
public string ApplicationObjectId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `EndDateRelative`<sup>Required</sup> <a name="EndDateRelative" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.endDateRelative"></a>

```csharp
public string EndDateRelative { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RotateWhenChanged`<sup>Required</sup> <a name="RotateWhenChanged" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.rotateWhenChanged"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RotateWhenChanged { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.applicationPassword.ApplicationPassword.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationPasswordConfig <a name="ApplicationPasswordConfig" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationPasswordConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApplicationId = null,
    string ApplicationObjectId = null,
    string DisplayName = null,
    string EndDate = null,
    string EndDateRelative = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> RotateWhenChanged = null,
    string StartDate = null,
    ApplicationPasswordTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | The resource ID of the application for which this password should be created. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.applicationObjectId">ApplicationObjectId</a></code> | <code>string</code> | The object ID of the application for which this password should be created. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A display name for the password. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.endDate">EndDate</a></code> | <code>string</code> | The end date until which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.endDateRelative">EndDateRelative</a></code> | <code>string</code> | A relative duration for which the password is valid until, for example `240h` (10 days) or `2400h30m`. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_password#id ApplicationPassword#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.rotateWhenChanged">RotateWhenChanged</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Arbitrary map of values that, when changed, will trigger rotation of the password. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.startDate">StartDate</a></code> | <code>string</code> | The start date from which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date is used. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts">ApplicationPasswordTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationId`<sup>Optional</sup> <a name="ApplicationId" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

The resource ID of the application for which this password should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_password#application_id ApplicationPassword#application_id}

---

##### `ApplicationObjectId`<sup>Optional</sup> <a name="ApplicationObjectId" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.applicationObjectId"></a>

```csharp
public string ApplicationObjectId { get; set; }
```

- *Type:* string

The object ID of the application for which this password should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_password#application_object_id ApplicationPassword#application_object_id}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A display name for the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_password#display_name ApplicationPassword#display_name}

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.endDate"></a>

```csharp
public string EndDate { get; set; }
```

- *Type:* string

The end date until which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_password#end_date ApplicationPassword#end_date}

---

##### `EndDateRelative`<sup>Optional</sup> <a name="EndDateRelative" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.endDateRelative"></a>

```csharp
public string EndDateRelative { get; set; }
```

- *Type:* string

A relative duration for which the password is valid until, for example `240h` (10 days) or `2400h30m`.

Changing this field forces a new resource to be created

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_password#end_date_relative ApplicationPassword#end_date_relative}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_password#id ApplicationPassword#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RotateWhenChanged`<sup>Optional</sup> <a name="RotateWhenChanged" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.rotateWhenChanged"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RotateWhenChanged { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Arbitrary map of values that, when changed, will trigger rotation of the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_password#rotate_when_changed ApplicationPassword#rotate_when_changed}

---

##### `StartDate`<sup>Optional</sup> <a name="StartDate" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.startDate"></a>

```csharp
public string StartDate { get; set; }
```

- *Type:* string

The start date from which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_password#start_date ApplicationPassword#start_date}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordConfig.property.timeouts"></a>

```csharp
public ApplicationPasswordTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts">ApplicationPasswordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_password#timeouts ApplicationPassword#timeouts}

---

### ApplicationPasswordTimeouts <a name="ApplicationPasswordTimeouts" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationPasswordTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_password#create ApplicationPassword#create}. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_password#delete ApplicationPassword#delete}. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_password#read ApplicationPassword#read}. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_password#update ApplicationPassword#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_password#create ApplicationPassword#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_password#delete ApplicationPassword#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_password#read ApplicationPassword#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_password#update ApplicationPassword#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationPasswordTimeoutsOutputReference <a name="ApplicationPasswordTimeoutsOutputReference" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationPasswordTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



