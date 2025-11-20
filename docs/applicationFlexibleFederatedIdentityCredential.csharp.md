# `applicationFlexibleFederatedIdentityCredential` Submodule <a name="`applicationFlexibleFederatedIdentityCredential` Submodule" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationFlexibleFederatedIdentityCredential <a name="ApplicationFlexibleFederatedIdentityCredential" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential azuread_application_flexible_federated_identity_credential}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationFlexibleFederatedIdentityCredential(Construct Scope, string Id, ApplicationFlexibleFederatedIdentityCredentialConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig">ApplicationFlexibleFederatedIdentityCredentialConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig">ApplicationFlexibleFederatedIdentityCredentialConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.putTimeouts"></a>

```csharp
private void PutTimeouts(ApplicationFlexibleFederatedIdentityCredentialTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts">ApplicationFlexibleFederatedIdentityCredentialTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationFlexibleFederatedIdentityCredential resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ApplicationFlexibleFederatedIdentityCredential.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ApplicationFlexibleFederatedIdentityCredential.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ApplicationFlexibleFederatedIdentityCredential.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ApplicationFlexibleFederatedIdentityCredential.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApplicationFlexibleFederatedIdentityCredential resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationFlexibleFederatedIdentityCredential to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationFlexibleFederatedIdentityCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationFlexibleFederatedIdentityCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.credentialId">CredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference">ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.audienceInput">AudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.claimsMatchingExpressionInput">ClaimsMatchingExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts">ApplicationFlexibleFederatedIdentityCredentialTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.claimsMatchingExpression">ClaimsMatchingExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CredentialId`<sup>Required</sup> <a name="CredentialId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.credentialId"></a>

```csharp
public string CredentialId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.timeouts"></a>

```csharp
public ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference">ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference</a>

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.audienceInput"></a>

```csharp
public string AudienceInput { get; }
```

- *Type:* string

---

##### `ClaimsMatchingExpressionInput`<sup>Optional</sup> <a name="ClaimsMatchingExpressionInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.claimsMatchingExpressionInput"></a>

```csharp
public string ClaimsMatchingExpressionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.timeoutsInput"></a>

```csharp
public IResolvable|ApplicationFlexibleFederatedIdentityCredentialTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts">ApplicationFlexibleFederatedIdentityCredentialTimeouts</a>

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `ClaimsMatchingExpression`<sup>Required</sup> <a name="ClaimsMatchingExpression" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.claimsMatchingExpression"></a>

```csharp
public string ClaimsMatchingExpression { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationFlexibleFederatedIdentityCredentialConfig <a name="ApplicationFlexibleFederatedIdentityCredentialConfig" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationFlexibleFederatedIdentityCredentialConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApplicationId,
    string Audience,
    string ClaimsMatchingExpression,
    string DisplayName,
    string Issuer,
    string Description = null,
    string Id = null,
    ApplicationFlexibleFederatedIdentityCredentialTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | The resource ID of the application for which this flexible federated identity credential should be created. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.audience">Audience</a></code> | <code>string</code> | The audience that can appear in the external token. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.claimsMatchingExpression">ClaimsMatchingExpression</a></code> | <code>string</code> | The expression to match for claims. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A unique display name for the flexible federated identity credential. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.issuer">Issuer</a></code> | <code>string</code> | The URL of the external identity provider, which must match the issuer claim of the external token being exchanged. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.description">Description</a></code> | <code>string</code> | A description for the flexible federated identity credential. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#id ApplicationFlexibleFederatedIdentityCredential#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts">ApplicationFlexibleFederatedIdentityCredentialTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

The resource ID of the application for which this flexible federated identity credential should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#application_id ApplicationFlexibleFederatedIdentityCredential#application_id}

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.audience"></a>

```csharp
public string Audience { get; set; }
```

- *Type:* string

The audience that can appear in the external token.

This specifies what should be accepted in the `aud` claim of incoming tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#audience ApplicationFlexibleFederatedIdentityCredential#audience}

---

##### `ClaimsMatchingExpression`<sup>Required</sup> <a name="ClaimsMatchingExpression" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.claimsMatchingExpression"></a>

```csharp
public string ClaimsMatchingExpression { get; set; }
```

- *Type:* string

The expression to match for claims.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#claims_matching_expression ApplicationFlexibleFederatedIdentityCredential#claims_matching_expression}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A unique display name for the flexible federated identity credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#display_name ApplicationFlexibleFederatedIdentityCredential#display_name}

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

The URL of the external identity provider, which must match the issuer claim of the external token being exchanged.

The combination of the values of issuer and subject must be unique on the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#issuer ApplicationFlexibleFederatedIdentityCredential#issuer}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description for the flexible federated identity credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#description ApplicationFlexibleFederatedIdentityCredential#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#id ApplicationFlexibleFederatedIdentityCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.timeouts"></a>

```csharp
public ApplicationFlexibleFederatedIdentityCredentialTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts">ApplicationFlexibleFederatedIdentityCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#timeouts ApplicationFlexibleFederatedIdentityCredential#timeouts}

---

### ApplicationFlexibleFederatedIdentityCredentialTimeouts <a name="ApplicationFlexibleFederatedIdentityCredentialTimeouts" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationFlexibleFederatedIdentityCredentialTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#create ApplicationFlexibleFederatedIdentityCredential#create}. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#delete ApplicationFlexibleFederatedIdentityCredential#delete}. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#read ApplicationFlexibleFederatedIdentityCredential#read}. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#update ApplicationFlexibleFederatedIdentityCredential#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#create ApplicationFlexibleFederatedIdentityCredential#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#delete ApplicationFlexibleFederatedIdentityCredential#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#read ApplicationFlexibleFederatedIdentityCredential#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#update ApplicationFlexibleFederatedIdentityCredential#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference <a name="ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts">ApplicationFlexibleFederatedIdentityCredentialTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApplicationFlexibleFederatedIdentityCredentialTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts">ApplicationFlexibleFederatedIdentityCredentialTimeouts</a>

---



