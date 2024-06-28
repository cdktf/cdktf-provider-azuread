# `synchronizationJobProvisionOnDemand` Submodule <a name="`synchronizationJobProvisionOnDemand` Submodule" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynchronizationJobProvisionOnDemand <a name="SynchronizationJobProvisionOnDemand" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/synchronization_job_provision_on_demand azuread_synchronization_job_provision_on_demand}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new SynchronizationJobProvisionOnDemand(Construct Scope, string Id, SynchronizationJobProvisionOnDemandConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig">SynchronizationJobProvisionOnDemandConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig">SynchronizationJobProvisionOnDemandConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.resetTriggers">ResetTriggers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.putParameter"></a>

```csharp
private void PutParameter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.putParameter.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.putTimeouts"></a>

```csharp
private void PutTimeouts(SynchronizationJobProvisionOnDemandTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts">SynchronizationJobProvisionOnDemandTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTriggers` <a name="ResetTriggers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.resetTriggers"></a>

```csharp
private void ResetTriggers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SynchronizationJobProvisionOnDemand resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

SynchronizationJobProvisionOnDemand.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

SynchronizationJobProvisionOnDemand.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

SynchronizationJobProvisionOnDemand.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

SynchronizationJobProvisionOnDemand.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SynchronizationJobProvisionOnDemand resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SynchronizationJobProvisionOnDemand to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SynchronizationJobProvisionOnDemand that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/synchronization_job_provision_on_demand#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SynchronizationJobProvisionOnDemand to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList">SynchronizationJobProvisionOnDemandParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference">SynchronizationJobProvisionOnDemandTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.parameterInput">ParameterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.synchronizationJobIdInput">SynchronizationJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.triggersInput">TriggersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.synchronizationJobId">SynchronizationJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.triggers">Triggers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.parameter"></a>

```csharp
public SynchronizationJobProvisionOnDemandParameterList Parameter { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList">SynchronizationJobProvisionOnDemandParameterList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.timeouts"></a>

```csharp
public SynchronizationJobProvisionOnDemandTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference">SynchronizationJobProvisionOnDemandTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.parameterInput"></a>

```csharp
public object ParameterInput { get; }
```

- *Type:* object

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.servicePrincipalIdInput"></a>

```csharp
public string ServicePrincipalIdInput { get; }
```

- *Type:* string

---

##### `SynchronizationJobIdInput`<sup>Optional</sup> <a name="SynchronizationJobIdInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.synchronizationJobIdInput"></a>

```csharp
public string SynchronizationJobIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TriggersInput`<sup>Optional</sup> <a name="TriggersInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.triggersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TriggersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.servicePrincipalId"></a>

```csharp
public string ServicePrincipalId { get; }
```

- *Type:* string

---

##### `SynchronizationJobId`<sup>Required</sup> <a name="SynchronizationJobId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.synchronizationJobId"></a>

```csharp
public string SynchronizationJobId { get; }
```

- *Type:* string

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.triggers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Triggers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SynchronizationJobProvisionOnDemandConfig <a name="SynchronizationJobProvisionOnDemandConfig" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new SynchronizationJobProvisionOnDemandConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Parameter,
    string ServicePrincipalId,
    string SynchronizationJobId,
    string Id = null,
    SynchronizationJobProvisionOnDemandTimeouts Timeouts = null,
    System.Collections.Generic.IDictionary<string, string> Triggers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.parameter">Parameter</a></code> | <code>object</code> | parameter block. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>string</code> | The object ID of the service principal for which this synchronization job should be provisioned. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.synchronizationJobId">SynchronizationJobId</a></code> | <code>string</code> | The identifier for the synchronization jop. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/synchronization_job_provision_on_demand#id SynchronizationJobProvisionOnDemand#id}. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts">SynchronizationJobProvisionOnDemandTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.triggers">Triggers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/synchronization_job_provision_on_demand#triggers SynchronizationJobProvisionOnDemand#triggers}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.parameter"></a>

```csharp
public object Parameter { get; set; }
```

- *Type:* object

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/synchronization_job_provision_on_demand#parameter SynchronizationJobProvisionOnDemand#parameter}

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.servicePrincipalId"></a>

```csharp
public string ServicePrincipalId { get; set; }
```

- *Type:* string

The object ID of the service principal for which this synchronization job should be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/synchronization_job_provision_on_demand#service_principal_id SynchronizationJobProvisionOnDemand#service_principal_id}

---

##### `SynchronizationJobId`<sup>Required</sup> <a name="SynchronizationJobId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.synchronizationJobId"></a>

```csharp
public string SynchronizationJobId { get; set; }
```

- *Type:* string

The identifier for the synchronization jop.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/synchronization_job_provision_on_demand#synchronization_job_id SynchronizationJobProvisionOnDemand#synchronization_job_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/synchronization_job_provision_on_demand#id SynchronizationJobProvisionOnDemand#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.timeouts"></a>

```csharp
public SynchronizationJobProvisionOnDemandTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts">SynchronizationJobProvisionOnDemandTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/synchronization_job_provision_on_demand#timeouts SynchronizationJobProvisionOnDemand#timeouts}

---

##### `Triggers`<sup>Optional</sup> <a name="Triggers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.triggers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Triggers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/synchronization_job_provision_on_demand#triggers SynchronizationJobProvisionOnDemand#triggers}.

---

### SynchronizationJobProvisionOnDemandParameter <a name="SynchronizationJobProvisionOnDemandParameter" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new SynchronizationJobProvisionOnDemandParameter {
    string RuleId,
    object Subject
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter.property.ruleId">RuleId</a></code> | <code>string</code> | The identifier of the synchronization rule to be applied. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter.property.subject">Subject</a></code> | <code>object</code> | subject block. |

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter.property.ruleId"></a>

```csharp
public string RuleId { get; set; }
```

- *Type:* string

The identifier of the synchronization rule to be applied.

This rule ID is defined in the schema for a given synchronization job or template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/synchronization_job_provision_on_demand#rule_id SynchronizationJobProvisionOnDemand#rule_id}

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter.property.subject"></a>

```csharp
public object Subject { get; set; }
```

- *Type:* object

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/synchronization_job_provision_on_demand#subject SynchronizationJobProvisionOnDemand#subject}

---

### SynchronizationJobProvisionOnDemandParameterSubject <a name="SynchronizationJobProvisionOnDemandParameterSubject" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new SynchronizationJobProvisionOnDemandParameterSubject {
    string ObjectId,
    string ObjectTypeName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject.property.objectId">ObjectId</a></code> | <code>string</code> | The identifier of an object to which a synchronization job is to be applied. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject.property.objectTypeName">ObjectTypeName</a></code> | <code>string</code> | The type of the object to which a synchronization job is to be applied. |

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject.property.objectId"></a>

```csharp
public string ObjectId { get; set; }
```

- *Type:* string

The identifier of an object to which a synchronization job is to be applied.

Can be one of the following: (1) An onPremisesDistinguishedName for synchronization from Active Directory to Azure AD. (2) The user ID for synchronization from Azure AD to a third-party. (3) The Worker ID of the Workday worker for synchronization from Workday to either Active Directory or Azure AD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/synchronization_job_provision_on_demand#object_id SynchronizationJobProvisionOnDemand#object_id}

---

##### `ObjectTypeName`<sup>Required</sup> <a name="ObjectTypeName" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject.property.objectTypeName"></a>

```csharp
public string ObjectTypeName { get; set; }
```

- *Type:* string

The type of the object to which a synchronization job is to be applied.

Can be one of the following: `user` for synchronizing between Active Directory and Azure AD, `User` for synchronizing a user between Azure AD and a third-party application, `Worker` for synchronization a user between Workday and either Active Directory or Azure AD, `Group` for synchronizing a group between Azure AD and a third-party application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/synchronization_job_provision_on_demand#object_type_name SynchronizationJobProvisionOnDemand#object_type_name}

---

### SynchronizationJobProvisionOnDemandTimeouts <a name="SynchronizationJobProvisionOnDemandTimeouts" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new SynchronizationJobProvisionOnDemandTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/synchronization_job_provision_on_demand#create SynchronizationJobProvisionOnDemand#create}. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/synchronization_job_provision_on_demand#delete SynchronizationJobProvisionOnDemand#delete}. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/synchronization_job_provision_on_demand#read SynchronizationJobProvisionOnDemand#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/synchronization_job_provision_on_demand#create SynchronizationJobProvisionOnDemand#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/synchronization_job_provision_on_demand#delete SynchronizationJobProvisionOnDemand#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.0/docs/resources/synchronization_job_provision_on_demand#read SynchronizationJobProvisionOnDemand#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynchronizationJobProvisionOnDemandParameterList <a name="SynchronizationJobProvisionOnDemandParameterList" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new SynchronizationJobProvisionOnDemandParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.get"></a>

```csharp
private SynchronizationJobProvisionOnDemandParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SynchronizationJobProvisionOnDemandParameterOutputReference <a name="SynchronizationJobProvisionOnDemandParameterOutputReference" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new SynchronizationJobProvisionOnDemandParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.putSubject">PutSubject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSubject` <a name="PutSubject" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.putSubject"></a>

```csharp
private void PutSubject(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.putSubject.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.subject">Subject</a></code> | <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList">SynchronizationJobProvisionOnDemandParameterSubjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.ruleIdInput">RuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.subjectInput">SubjectInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.subject"></a>

```csharp
public SynchronizationJobProvisionOnDemandParameterSubjectList Subject { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList">SynchronizationJobProvisionOnDemandParameterSubjectList</a>

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.ruleIdInput"></a>

```csharp
public string RuleIdInput { get; }
```

- *Type:* string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.subjectInput"></a>

```csharp
public object SubjectInput { get; }
```

- *Type:* object

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SynchronizationJobProvisionOnDemandParameterSubjectList <a name="SynchronizationJobProvisionOnDemandParameterSubjectList" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new SynchronizationJobProvisionOnDemandParameterSubjectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.get"></a>

```csharp
private SynchronizationJobProvisionOnDemandParameterSubjectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SynchronizationJobProvisionOnDemandParameterSubjectOutputReference <a name="SynchronizationJobProvisionOnDemandParameterSubjectOutputReference" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new SynchronizationJobProvisionOnDemandParameterSubjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectTypeNameInput">ObjectTypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectTypeName">ObjectTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectIdInput"></a>

```csharp
public string ObjectIdInput { get; }
```

- *Type:* string

---

##### `ObjectTypeNameInput`<sup>Optional</sup> <a name="ObjectTypeNameInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectTypeNameInput"></a>

```csharp
public string ObjectTypeNameInput { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `ObjectTypeName`<sup>Required</sup> <a name="ObjectTypeName" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectTypeName"></a>

```csharp
public string ObjectTypeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SynchronizationJobProvisionOnDemandTimeoutsOutputReference <a name="SynchronizationJobProvisionOnDemandTimeoutsOutputReference" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new SynchronizationJobProvisionOnDemandTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



