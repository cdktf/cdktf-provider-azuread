# `applicationOptionalClaims` Submodule <a name="`applicationOptionalClaims` Submodule" id="@cdktf/provider-azuread.applicationOptionalClaims"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationOptionalClaimsA <a name="ApplicationOptionalClaimsA" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims azuread_application_optional_claims}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaimsA(Construct Scope, string Id, ApplicationOptionalClaimsAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig">ApplicationOptionalClaimsAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig">ApplicationOptionalClaimsAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putAccessToken">PutAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putIdToken">PutIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putSaml2Token">PutSaml2Token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetIdToken">ResetIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetSaml2Token">ResetSaml2Token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessToken` <a name="PutAccessToken" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putAccessToken"></a>

```csharp
private void PutAccessToken(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putAccessToken.parameter.value"></a>

- *Type:* object

---

##### `PutIdToken` <a name="PutIdToken" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putIdToken"></a>

```csharp
private void PutIdToken(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putIdToken.parameter.value"></a>

- *Type:* object

---

##### `PutSaml2Token` <a name="PutSaml2Token" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putSaml2Token"></a>

```csharp
private void PutSaml2Token(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putSaml2Token.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putTimeouts"></a>

```csharp
private void PutTimeouts(ApplicationOptionalClaimsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts">ApplicationOptionalClaimsTimeouts</a>

---

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetAccessToken"></a>

```csharp
private void ResetAccessToken()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdToken` <a name="ResetIdToken" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetIdToken"></a>

```csharp
private void ResetIdToken()
```

##### `ResetSaml2Token` <a name="ResetSaml2Token" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetSaml2Token"></a>

```csharp
private void ResetSaml2Token()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationOptionalClaimsA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ApplicationOptionalClaimsA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ApplicationOptionalClaimsA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ApplicationOptionalClaimsA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ApplicationOptionalClaimsA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApplicationOptionalClaimsA resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationOptionalClaimsA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationOptionalClaimsA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationOptionalClaimsA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.accessToken">AccessToken</a></code> | <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList">ApplicationOptionalClaimsAccessTokenAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idToken">IdToken</a></code> | <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList">ApplicationOptionalClaimsIdTokenAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.saml2Token">Saml2Token</a></code> | <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList">ApplicationOptionalClaimsSaml2TokenAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference">ApplicationOptionalClaimsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.accessTokenInput">AccessTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idTokenInput">IdTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.saml2TokenInput">Saml2TokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.accessToken"></a>

```csharp
public ApplicationOptionalClaimsAccessTokenAList AccessToken { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList">ApplicationOptionalClaimsAccessTokenAList</a>

---

##### `IdToken`<sup>Required</sup> <a name="IdToken" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idToken"></a>

```csharp
public ApplicationOptionalClaimsIdTokenAList IdToken { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList">ApplicationOptionalClaimsIdTokenAList</a>

---

##### `Saml2Token`<sup>Required</sup> <a name="Saml2Token" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.saml2Token"></a>

```csharp
public ApplicationOptionalClaimsSaml2TokenAList Saml2Token { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList">ApplicationOptionalClaimsSaml2TokenAList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.timeouts"></a>

```csharp
public ApplicationOptionalClaimsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference">ApplicationOptionalClaimsTimeoutsOutputReference</a>

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.accessTokenInput"></a>

```csharp
public object AccessTokenInput { get; }
```

- *Type:* object

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdTokenInput`<sup>Optional</sup> <a name="IdTokenInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idTokenInput"></a>

```csharp
public object IdTokenInput { get; }
```

- *Type:* object

---

##### `Saml2TokenInput`<sup>Optional</sup> <a name="Saml2TokenInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.saml2TokenInput"></a>

```csharp
public object Saml2TokenInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationOptionalClaimsAccessTokenA <a name="ApplicationOptionalClaimsAccessTokenA" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaimsAccessTokenA {
    string Name,
    string[] AdditionalProperties = null,
    object Essential = null,
    string Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.name">Name</a></code> | <code>string</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.additionalProperties">AdditionalProperties</a></code> | <code>string[]</code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.essential">Essential</a></code> | <code>object</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.source">Source</a></code> | <code>string</code> | The source of the claim. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#name ApplicationOptionalClaimsA#name}

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.additionalProperties"></a>

```csharp
public string[] AdditionalProperties { get; set; }
```

- *Type:* string[]

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#additional_properties ApplicationOptionalClaimsA#additional_properties}

---

##### `Essential`<sup>Optional</sup> <a name="Essential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.essential"></a>

```csharp
public object Essential { get; set; }
```

- *Type:* object

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#essential ApplicationOptionalClaimsA#essential}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#source ApplicationOptionalClaimsA#source}

---

### ApplicationOptionalClaimsAConfig <a name="ApplicationOptionalClaimsAConfig" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaimsAConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApplicationId,
    object AccessToken = null,
    string Id = null,
    object IdToken = null,
    object Saml2Token = null,
    ApplicationOptionalClaimsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | The resource ID of the application to which these optional claims belong. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.accessToken">AccessToken</a></code> | <code>object</code> | access_token block. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#id ApplicationOptionalClaimsA#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.idToken">IdToken</a></code> | <code>object</code> | id_token block. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.saml2Token">Saml2Token</a></code> | <code>object</code> | saml2_token block. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts">ApplicationOptionalClaimsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

The resource ID of the application to which these optional claims belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#application_id ApplicationOptionalClaimsA#application_id}

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.accessToken"></a>

```csharp
public object AccessToken { get; set; }
```

- *Type:* object

access_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#access_token ApplicationOptionalClaimsA#access_token}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#id ApplicationOptionalClaimsA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdToken`<sup>Optional</sup> <a name="IdToken" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.idToken"></a>

```csharp
public object IdToken { get; set; }
```

- *Type:* object

id_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#id_token ApplicationOptionalClaimsA#id_token}

---

##### `Saml2Token`<sup>Optional</sup> <a name="Saml2Token" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.saml2Token"></a>

```csharp
public object Saml2Token { get; set; }
```

- *Type:* object

saml2_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#saml2_token ApplicationOptionalClaimsA#saml2_token}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.timeouts"></a>

```csharp
public ApplicationOptionalClaimsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts">ApplicationOptionalClaimsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#timeouts ApplicationOptionalClaimsA#timeouts}

---

### ApplicationOptionalClaimsIdTokenA <a name="ApplicationOptionalClaimsIdTokenA" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaimsIdTokenA {
    string Name,
    string[] AdditionalProperties = null,
    object Essential = null,
    string Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.name">Name</a></code> | <code>string</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.additionalProperties">AdditionalProperties</a></code> | <code>string[]</code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.essential">Essential</a></code> | <code>object</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.source">Source</a></code> | <code>string</code> | The source of the claim. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#name ApplicationOptionalClaimsA#name}

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.additionalProperties"></a>

```csharp
public string[] AdditionalProperties { get; set; }
```

- *Type:* string[]

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#additional_properties ApplicationOptionalClaimsA#additional_properties}

---

##### `Essential`<sup>Optional</sup> <a name="Essential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.essential"></a>

```csharp
public object Essential { get; set; }
```

- *Type:* object

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#essential ApplicationOptionalClaimsA#essential}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#source ApplicationOptionalClaimsA#source}

---

### ApplicationOptionalClaimsSaml2TokenA <a name="ApplicationOptionalClaimsSaml2TokenA" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaimsSaml2TokenA {
    string Name,
    string[] AdditionalProperties = null,
    object Essential = null,
    string Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.name">Name</a></code> | <code>string</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.additionalProperties">AdditionalProperties</a></code> | <code>string[]</code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.essential">Essential</a></code> | <code>object</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.source">Source</a></code> | <code>string</code> | The source of the claim. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#name ApplicationOptionalClaimsA#name}

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.additionalProperties"></a>

```csharp
public string[] AdditionalProperties { get; set; }
```

- *Type:* string[]

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#additional_properties ApplicationOptionalClaimsA#additional_properties}

---

##### `Essential`<sup>Optional</sup> <a name="Essential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.essential"></a>

```csharp
public object Essential { get; set; }
```

- *Type:* object

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#essential ApplicationOptionalClaimsA#essential}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#source ApplicationOptionalClaimsA#source}

---

### ApplicationOptionalClaimsTimeouts <a name="ApplicationOptionalClaimsTimeouts" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaimsTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#create ApplicationOptionalClaimsA#create}. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#delete ApplicationOptionalClaimsA#delete}. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#read ApplicationOptionalClaimsA#read}. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#update ApplicationOptionalClaimsA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#create ApplicationOptionalClaimsA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#delete ApplicationOptionalClaimsA#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#read ApplicationOptionalClaimsA#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/application_optional_claims#update ApplicationOptionalClaimsA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationOptionalClaimsAccessTokenAList <a name="ApplicationOptionalClaimsAccessTokenAList" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaimsAccessTokenAList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.get"></a>

```csharp
private ApplicationOptionalClaimsAccessTokenAOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationOptionalClaimsAccessTokenAOutputReference <a name="ApplicationOptionalClaimsAccessTokenAOutputReference" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaimsAccessTokenAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resetEssential">ResetEssential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resetAdditionalProperties"></a>

```csharp
private void ResetAdditionalProperties()
```

##### `ResetEssential` <a name="ResetEssential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resetEssential"></a>

```csharp
private void ResetEssential()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.essentialInput">EssentialInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.additionalProperties">AdditionalProperties</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.essential">Essential</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.additionalPropertiesInput"></a>

```csharp
public string[] AdditionalPropertiesInput { get; }
```

- *Type:* string[]

---

##### `EssentialInput`<sup>Optional</sup> <a name="EssentialInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.essentialInput"></a>

```csharp
public object EssentialInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.additionalProperties"></a>

```csharp
public string[] AdditionalProperties { get; }
```

- *Type:* string[]

---

##### `Essential`<sup>Required</sup> <a name="Essential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.essential"></a>

```csharp
public object Essential { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationOptionalClaimsIdTokenAList <a name="ApplicationOptionalClaimsIdTokenAList" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaimsIdTokenAList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.get"></a>

```csharp
private ApplicationOptionalClaimsIdTokenAOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationOptionalClaimsIdTokenAOutputReference <a name="ApplicationOptionalClaimsIdTokenAOutputReference" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaimsIdTokenAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resetEssential">ResetEssential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resetAdditionalProperties"></a>

```csharp
private void ResetAdditionalProperties()
```

##### `ResetEssential` <a name="ResetEssential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resetEssential"></a>

```csharp
private void ResetEssential()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.essentialInput">EssentialInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.additionalProperties">AdditionalProperties</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.essential">Essential</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.additionalPropertiesInput"></a>

```csharp
public string[] AdditionalPropertiesInput { get; }
```

- *Type:* string[]

---

##### `EssentialInput`<sup>Optional</sup> <a name="EssentialInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.essentialInput"></a>

```csharp
public object EssentialInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.additionalProperties"></a>

```csharp
public string[] AdditionalProperties { get; }
```

- *Type:* string[]

---

##### `Essential`<sup>Required</sup> <a name="Essential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.essential"></a>

```csharp
public object Essential { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationOptionalClaimsSaml2TokenAList <a name="ApplicationOptionalClaimsSaml2TokenAList" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaimsSaml2TokenAList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.get"></a>

```csharp
private ApplicationOptionalClaimsSaml2TokenAOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationOptionalClaimsSaml2TokenAOutputReference <a name="ApplicationOptionalClaimsSaml2TokenAOutputReference" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaimsSaml2TokenAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resetEssential">ResetEssential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resetAdditionalProperties"></a>

```csharp
private void ResetAdditionalProperties()
```

##### `ResetEssential` <a name="ResetEssential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resetEssential"></a>

```csharp
private void ResetEssential()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.essentialInput">EssentialInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.additionalProperties">AdditionalProperties</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.essential">Essential</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.additionalPropertiesInput"></a>

```csharp
public string[] AdditionalPropertiesInput { get; }
```

- *Type:* string[]

---

##### `EssentialInput`<sup>Optional</sup> <a name="EssentialInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.essentialInput"></a>

```csharp
public object EssentialInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.additionalProperties"></a>

```csharp
public string[] AdditionalProperties { get; }
```

- *Type:* string[]

---

##### `Essential`<sup>Required</sup> <a name="Essential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.essential"></a>

```csharp
public object Essential { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationOptionalClaimsTimeoutsOutputReference <a name="ApplicationOptionalClaimsTimeoutsOutputReference" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationOptionalClaimsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



