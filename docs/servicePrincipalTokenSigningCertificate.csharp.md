# `servicePrincipalTokenSigningCertificate` Submodule <a name="`servicePrincipalTokenSigningCertificate` Submodule" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipalTokenSigningCertificate <a name="ServicePrincipalTokenSigningCertificate" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/service_principal_token_signing_certificate azuread_service_principal_token_signing_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ServicePrincipalTokenSigningCertificate(Construct Scope, string Id, ServicePrincipalTokenSigningCertificateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig">ServicePrincipalTokenSigningCertificateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig">ServicePrincipalTokenSigningCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.putTimeouts"></a>

```csharp
private void PutTimeouts(ServicePrincipalTokenSigningCertificateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetEndDate"></a>

```csharp
private void ResetEndDate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServicePrincipalTokenSigningCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ServicePrincipalTokenSigningCertificate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ServicePrincipalTokenSigningCertificate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ServicePrincipalTokenSigningCertificate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ServicePrincipalTokenSigningCertificate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ServicePrincipalTokenSigningCertificate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicePrincipalTokenSigningCertificate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicePrincipalTokenSigningCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/service_principal_token_signing_certificate#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ServicePrincipalTokenSigningCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference">ServicePrincipalTokenSigningCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.endDateInput">EndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.timeouts"></a>

```csharp
public ServicePrincipalTokenSigningCertificateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference">ServicePrincipalTokenSigningCertificateTimeoutsOutputReference</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.endDateInput"></a>

```csharp
public string EndDateInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.servicePrincipalIdInput"></a>

```csharp
public string ServicePrincipalIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.timeoutsInput"></a>

```csharp
public IResolvable|ServicePrincipalTokenSigningCertificateTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.servicePrincipalId"></a>

```csharp
public string ServicePrincipalId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalTokenSigningCertificateConfig <a name="ServicePrincipalTokenSigningCertificateConfig" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ServicePrincipalTokenSigningCertificateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ServicePrincipalId,
    string DisplayName = null,
    string EndDate = null,
    string Id = null,
    ServicePrincipalTokenSigningCertificateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>string</code> | The ID of the service principal for which this certificate should be created. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A friendly name for the certificate. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.endDate">EndDate</a></code> | <code>string</code> | The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). Default is 3 years from current date. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/service_principal_token_signing_certificate#id ServicePrincipalTokenSigningCertificate#id}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.servicePrincipalId"></a>

```csharp
public string ServicePrincipalId { get; set; }
```

- *Type:* string

The ID of the service principal for which this certificate should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/service_principal_token_signing_certificate#service_principal_id ServicePrincipalTokenSigningCertificate#service_principal_id}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A friendly name for the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/service_principal_token_signing_certificate#display_name ServicePrincipalTokenSigningCertificate#display_name}

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.endDate"></a>

```csharp
public string EndDate { get; set; }
```

- *Type:* string

The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). Default is 3 years from current date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/service_principal_token_signing_certificate#end_date ServicePrincipalTokenSigningCertificate#end_date}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/service_principal_token_signing_certificate#id ServicePrincipalTokenSigningCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.timeouts"></a>

```csharp
public ServicePrincipalTokenSigningCertificateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/service_principal_token_signing_certificate#timeouts ServicePrincipalTokenSigningCertificate#timeouts}

---

### ServicePrincipalTokenSigningCertificateTimeouts <a name="ServicePrincipalTokenSigningCertificateTimeouts" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ServicePrincipalTokenSigningCertificateTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/service_principal_token_signing_certificate#create ServicePrincipalTokenSigningCertificate#create}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/service_principal_token_signing_certificate#delete ServicePrincipalTokenSigningCertificate#delete}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/service_principal_token_signing_certificate#read ServicePrincipalTokenSigningCertificate#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/service_principal_token_signing_certificate#create ServicePrincipalTokenSigningCertificate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/service_principal_token_signing_certificate#delete ServicePrincipalTokenSigningCertificate#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/service_principal_token_signing_certificate#read ServicePrincipalTokenSigningCertificate#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicePrincipalTokenSigningCertificateTimeoutsOutputReference <a name="ServicePrincipalTokenSigningCertificateTimeoutsOutputReference" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ServicePrincipalTokenSigningCertificateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicePrincipalTokenSigningCertificateTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a>

---



