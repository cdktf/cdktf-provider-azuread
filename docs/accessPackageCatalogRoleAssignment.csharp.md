# `accessPackageCatalogRoleAssignment` Submodule <a name="`accessPackageCatalogRoleAssignment` Submodule" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessPackageCatalogRoleAssignment <a name="AccessPackageCatalogRoleAssignment" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment azuread_access_package_catalog_role_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new AccessPackageCatalogRoleAssignment(Construct Scope, string Id, AccessPackageCatalogRoleAssignmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig">AccessPackageCatalogRoleAssignmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig">AccessPackageCatalogRoleAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.putTimeouts"></a>

```csharp
private void PutTimeouts(AccessPackageCatalogRoleAssignmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts">AccessPackageCatalogRoleAssignmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AccessPackageCatalogRoleAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

AccessPackageCatalogRoleAssignment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

AccessPackageCatalogRoleAssignment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

AccessPackageCatalogRoleAssignment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

AccessPackageCatalogRoleAssignment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AccessPackageCatalogRoleAssignment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccessPackageCatalogRoleAssignment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccessPackageCatalogRoleAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AccessPackageCatalogRoleAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference">AccessPackageCatalogRoleAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.principalObjectIdInput">PrincipalObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.roleIdInput">RoleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.principalObjectId">PrincipalObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.roleId">RoleId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.timeouts"></a>

```csharp
public AccessPackageCatalogRoleAssignmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference">AccessPackageCatalogRoleAssignmentTimeoutsOutputReference</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrincipalObjectIdInput`<sup>Optional</sup> <a name="PrincipalObjectIdInput" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.principalObjectIdInput"></a>

```csharp
public string PrincipalObjectIdInput { get; }
```

- *Type:* string

---

##### `RoleIdInput`<sup>Optional</sup> <a name="RoleIdInput" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.roleIdInput"></a>

```csharp
public string RoleIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrincipalObjectId`<sup>Required</sup> <a name="PrincipalObjectId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.principalObjectId"></a>

```csharp
public string PrincipalObjectId { get; }
```

- *Type:* string

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.roleId"></a>

```csharp
public string RoleId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessPackageCatalogRoleAssignmentConfig <a name="AccessPackageCatalogRoleAssignmentConfig" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new AccessPackageCatalogRoleAssignmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CatalogId,
    string PrincipalObjectId,
    string RoleId,
    string Id = null,
    AccessPackageCatalogRoleAssignmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.catalogId">CatalogId</a></code> | <code>string</code> | The unique ID of the access package catalog. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.principalObjectId">PrincipalObjectId</a></code> | <code>string</code> | The object ID of the member principal. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.roleId">RoleId</a></code> | <code>string</code> | The object ID of the catalog role for this assignment. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#id AccessPackageCatalogRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts">AccessPackageCatalogRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

The unique ID of the access package catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#catalog_id AccessPackageCatalogRoleAssignment#catalog_id}

---

##### `PrincipalObjectId`<sup>Required</sup> <a name="PrincipalObjectId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.principalObjectId"></a>

```csharp
public string PrincipalObjectId { get; set; }
```

- *Type:* string

The object ID of the member principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#principal_object_id AccessPackageCatalogRoleAssignment#principal_object_id}

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.roleId"></a>

```csharp
public string RoleId { get; set; }
```

- *Type:* string

The object ID of the catalog role for this assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#role_id AccessPackageCatalogRoleAssignment#role_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#id AccessPackageCatalogRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.timeouts"></a>

```csharp
public AccessPackageCatalogRoleAssignmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts">AccessPackageCatalogRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#timeouts AccessPackageCatalogRoleAssignment#timeouts}

---

### AccessPackageCatalogRoleAssignmentTimeouts <a name="AccessPackageCatalogRoleAssignmentTimeouts" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new AccessPackageCatalogRoleAssignmentTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#create AccessPackageCatalogRoleAssignment#create}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#delete AccessPackageCatalogRoleAssignment#delete}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#read AccessPackageCatalogRoleAssignment#read}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#update AccessPackageCatalogRoleAssignment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#create AccessPackageCatalogRoleAssignment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#delete AccessPackageCatalogRoleAssignment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#read AccessPackageCatalogRoleAssignment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#update AccessPackageCatalogRoleAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessPackageCatalogRoleAssignmentTimeoutsOutputReference <a name="AccessPackageCatalogRoleAssignmentTimeoutsOutputReference" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new AccessPackageCatalogRoleAssignmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



