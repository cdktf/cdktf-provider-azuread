# `azuread_service_principal_certificate`

Refer to the Terraform Registory for docs: [`azuread_service_principal_certificate`](https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/service_principal_certificate).

# `servicePrincipalCertificate` Submodule <a name="`servicePrincipalCertificate` Submodule" id="@cdktf/provider-azuread.servicePrincipalCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipalCertificate <a name="ServicePrincipalCertificate" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/service_principal_certificate azuread_service_principal_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ServicePrincipalCertificate(Construct Scope, string Id, ServicePrincipalCertificateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig">ServicePrincipalCertificateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig">ServicePrincipalCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetEndDateRelative">ResetEndDateRelative</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetKeyId">ResetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetStartDate">ResetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.putTimeouts"></a>

```csharp
private void PutTimeouts(ServicePrincipalCertificateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts">ServicePrincipalCertificateTimeouts</a>

---

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetEncoding"></a>

```csharp
private void ResetEncoding()
```

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetEndDate"></a>

```csharp
private void ResetEndDate()
```

##### `ResetEndDateRelative` <a name="ResetEndDateRelative" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetEndDateRelative"></a>

```csharp
private void ResetEndDateRelative()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetKeyId"></a>

```csharp
private void ResetKeyId()
```

##### `ResetStartDate` <a name="ResetStartDate" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetStartDate"></a>

```csharp
private void ResetStartDate()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServicePrincipalCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ServicePrincipalCertificate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ServicePrincipalCertificate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ServicePrincipalCertificate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ServicePrincipalCertificate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ServicePrincipalCertificate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicePrincipalCertificate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicePrincipalCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/service_principal_certificate#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ServicePrincipalCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference">ServicePrincipalCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDateInput">EndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDateRelativeInput">EndDateRelativeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.startDateInput">StartDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDateRelative">EndDateRelative</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.value">Value</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.timeouts"></a>

```csharp
public ServicePrincipalCertificateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference">ServicePrincipalCertificateTimeoutsOutputReference</a>

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDateInput"></a>

```csharp
public string EndDateInput { get; }
```

- *Type:* string

---

##### `EndDateRelativeInput`<sup>Optional</sup> <a name="EndDateRelativeInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDateRelativeInput"></a>

```csharp
public string EndDateRelativeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.servicePrincipalIdInput"></a>

```csharp
public string ServicePrincipalIdInput { get; }
```

- *Type:* string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.startDateInput"></a>

```csharp
public string StartDateInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `EndDateRelative`<sup>Required</sup> <a name="EndDateRelative" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDateRelative"></a>

```csharp
public string EndDateRelative { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.servicePrincipalId"></a>

```csharp
public string ServicePrincipalId { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalCertificateConfig <a name="ServicePrincipalCertificateConfig" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ServicePrincipalCertificateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ServicePrincipalId,
    string Value,
    string Encoding = null,
    string EndDate = null,
    string EndDateRelative = null,
    string Id = null,
    string KeyId = null,
    string StartDate = null,
    ServicePrincipalCertificateTimeouts Timeouts = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>string</code> | The object ID of the service principal for which this certificate should be created. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.value">Value</a></code> | <code>string</code> | The certificate data, which can be PEM encoded, base64 encoded DER or hexadecimal encoded DER. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.encoding">Encoding</a></code> | <code>string</code> | Specifies the encoding used for the supplied certificate data. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.endDate">EndDate</a></code> | <code>string</code> | The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.endDateRelative">EndDateRelative</a></code> | <code>string</code> | A relative duration for which the certificate is valid until, for example `240h` (10 days) or `2400h30m`. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/service_principal_certificate#id ServicePrincipalCertificate#id}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.keyId">KeyId</a></code> | <code>string</code> | A UUID used to uniquely identify this certificate. If not specified a UUID will be automatically generated. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.startDate">StartDate</a></code> | <code>string</code> | The start date from which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date is used. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts">ServicePrincipalCertificateTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.type">Type</a></code> | <code>string</code> | The type of key/certificate. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.servicePrincipalId"></a>

```csharp
public string ServicePrincipalId { get; set; }
```

- *Type:* string

The object ID of the service principal for which this certificate should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/service_principal_certificate#service_principal_id ServicePrincipalCertificate#service_principal_id}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The certificate data, which can be PEM encoded, base64 encoded DER or hexadecimal encoded DER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/service_principal_certificate#value ServicePrincipalCertificate#value}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

Specifies the encoding used for the supplied certificate data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/service_principal_certificate#encoding ServicePrincipalCertificate#encoding}

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.endDate"></a>

```csharp
public string EndDate { get; set; }
```

- *Type:* string

The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/service_principal_certificate#end_date ServicePrincipalCertificate#end_date}

---

##### `EndDateRelative`<sup>Optional</sup> <a name="EndDateRelative" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.endDateRelative"></a>

```csharp
public string EndDateRelative { get; set; }
```

- *Type:* string

A relative duration for which the certificate is valid until, for example `240h` (10 days) or `2400h30m`.

Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/service_principal_certificate#end_date_relative ServicePrincipalCertificate#end_date_relative}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/service_principal_certificate#id ServicePrincipalCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

A UUID used to uniquely identify this certificate. If not specified a UUID will be automatically generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/service_principal_certificate#key_id ServicePrincipalCertificate#key_id}

---

##### `StartDate`<sup>Optional</sup> <a name="StartDate" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.startDate"></a>

```csharp
public string StartDate { get; set; }
```

- *Type:* string

The start date from which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/service_principal_certificate#start_date ServicePrincipalCertificate#start_date}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.timeouts"></a>

```csharp
public ServicePrincipalCertificateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts">ServicePrincipalCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/service_principal_certificate#timeouts ServicePrincipalCertificate#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of key/certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/service_principal_certificate#type ServicePrincipalCertificate#type}

---

### ServicePrincipalCertificateTimeouts <a name="ServicePrincipalCertificateTimeouts" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ServicePrincipalCertificateTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/service_principal_certificate#create ServicePrincipalCertificate#create}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/service_principal_certificate#delete ServicePrincipalCertificate#delete}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/service_principal_certificate#read ServicePrincipalCertificate#read}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/service_principal_certificate#update ServicePrincipalCertificate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/service_principal_certificate#create ServicePrincipalCertificate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/service_principal_certificate#delete ServicePrincipalCertificate#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/service_principal_certificate#read ServicePrincipalCertificate#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/service_principal_certificate#update ServicePrincipalCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicePrincipalCertificateTimeoutsOutputReference <a name="ServicePrincipalCertificateTimeoutsOutputReference" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ServicePrincipalCertificateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



