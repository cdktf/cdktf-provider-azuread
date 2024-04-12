# `applicationOptionalClaims` Submodule <a name="`applicationOptionalClaims` Submodule" id="@cdktf/provider-azuread.applicationOptionalClaims"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationOptionalClaimsA <a name="ApplicationOptionalClaimsA" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims azuread_application_optional_claims}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/applicationoptionalclaims"

applicationoptionalclaims.NewApplicationOptionalClaimsA(scope Construct, id *string, config ApplicationOptionalClaimsAConfig) ApplicationOptionalClaimsA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig">ApplicationOptionalClaimsAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig">ApplicationOptionalClaimsAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessToken` <a name="PutAccessToken" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putAccessToken"></a>

```go
func PutAccessToken(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putAccessToken.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIdToken` <a name="PutIdToken" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putIdToken"></a>

```go
func PutIdToken(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putIdToken.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSaml2Token` <a name="PutSaml2Token" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putSaml2Token"></a>

```go
func PutSaml2Token(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putSaml2Token.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putTimeouts"></a>

```go
func PutTimeouts(value ApplicationOptionalClaimsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts">ApplicationOptionalClaimsTimeouts</a>

---

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetAccessToken"></a>

```go
func ResetAccessToken()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetId"></a>

```go
func ResetId()
```

##### `ResetIdToken` <a name="ResetIdToken" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetIdToken"></a>

```go
func ResetIdToken()
```

##### `ResetSaml2Token` <a name="ResetSaml2Token" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetSaml2Token"></a>

```go
func ResetSaml2Token()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetTimeouts"></a>

```go
func ResetTimeouts()
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

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/applicationoptionalclaims"

applicationoptionalclaims.ApplicationOptionalClaimsA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/applicationoptionalclaims"

applicationoptionalclaims.ApplicationOptionalClaimsA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/applicationoptionalclaims"

applicationoptionalclaims.ApplicationOptionalClaimsA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/applicationoptionalclaims"

applicationoptionalclaims.ApplicationOptionalClaimsA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApplicationOptionalClaimsA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApplicationOptionalClaimsA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApplicationOptionalClaimsA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationOptionalClaimsA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.accessToken">AccessToken</a></code> | <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList">ApplicationOptionalClaimsAccessTokenAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idToken">IdToken</a></code> | <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList">ApplicationOptionalClaimsIdTokenAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.saml2Token">Saml2Token</a></code> | <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList">ApplicationOptionalClaimsSaml2TokenAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference">ApplicationOptionalClaimsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.accessTokenInput">AccessTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idTokenInput">IdTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.saml2TokenInput">Saml2TokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.accessToken"></a>

```go
func AccessToken() ApplicationOptionalClaimsAccessTokenAList
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList">ApplicationOptionalClaimsAccessTokenAList</a>

---

##### `IdToken`<sup>Required</sup> <a name="IdToken" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idToken"></a>

```go
func IdToken() ApplicationOptionalClaimsIdTokenAList
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList">ApplicationOptionalClaimsIdTokenAList</a>

---

##### `Saml2Token`<sup>Required</sup> <a name="Saml2Token" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.saml2Token"></a>

```go
func Saml2Token() ApplicationOptionalClaimsSaml2TokenAList
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList">ApplicationOptionalClaimsSaml2TokenAList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.timeouts"></a>

```go
func Timeouts() ApplicationOptionalClaimsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference">ApplicationOptionalClaimsTimeoutsOutputReference</a>

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.accessTokenInput"></a>

```go
func AccessTokenInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdTokenInput`<sup>Optional</sup> <a name="IdTokenInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idTokenInput"></a>

```go
func IdTokenInput() interface{}
```

- *Type:* interface{}

---

##### `Saml2TokenInput`<sup>Optional</sup> <a name="Saml2TokenInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.saml2TokenInput"></a>

```go
func Saml2TokenInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationOptionalClaimsAccessTokenA <a name="ApplicationOptionalClaimsAccessTokenA" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/applicationoptionalclaims"

&applicationoptionalclaims.ApplicationOptionalClaimsAccessTokenA {
	Name: *string,
	AdditionalProperties: *[]*string,
	Essential: interface{},
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.name">Name</a></code> | <code>*string</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.additionalProperties">AdditionalProperties</a></code> | <code>*[]*string</code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.essential">Essential</a></code> | <code>interface{}</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.source">Source</a></code> | <code>*string</code> | The source of the claim. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#name ApplicationOptionalClaimsA#name}

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.additionalProperties"></a>

```go
AdditionalProperties *[]*string
```

- *Type:* *[]*string

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#additional_properties ApplicationOptionalClaimsA#additional_properties}

---

##### `Essential`<sup>Optional</sup> <a name="Essential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.essential"></a>

```go
Essential interface{}
```

- *Type:* interface{}

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#essential ApplicationOptionalClaimsA#essential}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.source"></a>

```go
Source *string
```

- *Type:* *string

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#source ApplicationOptionalClaimsA#source}

---

### ApplicationOptionalClaimsAConfig <a name="ApplicationOptionalClaimsAConfig" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/applicationoptionalclaims"

&applicationoptionalclaims.ApplicationOptionalClaimsAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationId: *string,
	AccessToken: interface{},
	Id: *string,
	IdToken: interface{},
	Saml2Token: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azuread-go/azuread/v12.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | The resource ID of the application to which these optional claims belong. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.accessToken">AccessToken</a></code> | <code>interface{}</code> | access_token block. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#id ApplicationOptionalClaimsA#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.idToken">IdToken</a></code> | <code>interface{}</code> | id_token block. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.saml2Token">Saml2Token</a></code> | <code>interface{}</code> | saml2_token block. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts">ApplicationOptionalClaimsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

The resource ID of the application to which these optional claims belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#application_id ApplicationOptionalClaimsA#application_id}

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.accessToken"></a>

```go
AccessToken interface{}
```

- *Type:* interface{}

access_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#access_token ApplicationOptionalClaimsA#access_token}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#id ApplicationOptionalClaimsA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdToken`<sup>Optional</sup> <a name="IdToken" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.idToken"></a>

```go
IdToken interface{}
```

- *Type:* interface{}

id_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#id_token ApplicationOptionalClaimsA#id_token}

---

##### `Saml2Token`<sup>Optional</sup> <a name="Saml2Token" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.saml2Token"></a>

```go
Saml2Token interface{}
```

- *Type:* interface{}

saml2_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#saml2_token ApplicationOptionalClaimsA#saml2_token}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.timeouts"></a>

```go
Timeouts ApplicationOptionalClaimsTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts">ApplicationOptionalClaimsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#timeouts ApplicationOptionalClaimsA#timeouts}

---

### ApplicationOptionalClaimsIdTokenA <a name="ApplicationOptionalClaimsIdTokenA" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/applicationoptionalclaims"

&applicationoptionalclaims.ApplicationOptionalClaimsIdTokenA {
	Name: *string,
	AdditionalProperties: *[]*string,
	Essential: interface{},
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.name">Name</a></code> | <code>*string</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.additionalProperties">AdditionalProperties</a></code> | <code>*[]*string</code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.essential">Essential</a></code> | <code>interface{}</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.source">Source</a></code> | <code>*string</code> | The source of the claim. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#name ApplicationOptionalClaimsA#name}

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.additionalProperties"></a>

```go
AdditionalProperties *[]*string
```

- *Type:* *[]*string

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#additional_properties ApplicationOptionalClaimsA#additional_properties}

---

##### `Essential`<sup>Optional</sup> <a name="Essential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.essential"></a>

```go
Essential interface{}
```

- *Type:* interface{}

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#essential ApplicationOptionalClaimsA#essential}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.source"></a>

```go
Source *string
```

- *Type:* *string

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#source ApplicationOptionalClaimsA#source}

---

### ApplicationOptionalClaimsSaml2TokenA <a name="ApplicationOptionalClaimsSaml2TokenA" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/applicationoptionalclaims"

&applicationoptionalclaims.ApplicationOptionalClaimsSaml2TokenA {
	Name: *string,
	AdditionalProperties: *[]*string,
	Essential: interface{},
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.name">Name</a></code> | <code>*string</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.additionalProperties">AdditionalProperties</a></code> | <code>*[]*string</code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.essential">Essential</a></code> | <code>interface{}</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.source">Source</a></code> | <code>*string</code> | The source of the claim. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#name ApplicationOptionalClaimsA#name}

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.additionalProperties"></a>

```go
AdditionalProperties *[]*string
```

- *Type:* *[]*string

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#additional_properties ApplicationOptionalClaimsA#additional_properties}

---

##### `Essential`<sup>Optional</sup> <a name="Essential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.essential"></a>

```go
Essential interface{}
```

- *Type:* interface{}

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#essential ApplicationOptionalClaimsA#essential}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.source"></a>

```go
Source *string
```

- *Type:* *string

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#source ApplicationOptionalClaimsA#source}

---

### ApplicationOptionalClaimsTimeouts <a name="ApplicationOptionalClaimsTimeouts" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/applicationoptionalclaims"

&applicationoptionalclaims.ApplicationOptionalClaimsTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#create ApplicationOptionalClaimsA#create}. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#delete ApplicationOptionalClaimsA#delete}. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#read ApplicationOptionalClaimsA#read}. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#update ApplicationOptionalClaimsA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#create ApplicationOptionalClaimsA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#delete ApplicationOptionalClaimsA#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#read ApplicationOptionalClaimsA#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/application_optional_claims#update ApplicationOptionalClaimsA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationOptionalClaimsAccessTokenAList <a name="ApplicationOptionalClaimsAccessTokenAList" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/applicationoptionalclaims"

applicationoptionalclaims.NewApplicationOptionalClaimsAccessTokenAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApplicationOptionalClaimsAccessTokenAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.get"></a>

```go
func Get(index *f64) ApplicationOptionalClaimsAccessTokenAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationOptionalClaimsAccessTokenAOutputReference <a name="ApplicationOptionalClaimsAccessTokenAOutputReference" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/applicationoptionalclaims"

applicationoptionalclaims.NewApplicationOptionalClaimsAccessTokenAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApplicationOptionalClaimsAccessTokenAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resetAdditionalProperties"></a>

```go
func ResetAdditionalProperties()
```

##### `ResetEssential` <a name="ResetEssential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resetEssential"></a>

```go
func ResetEssential()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.essentialInput">EssentialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.additionalProperties">AdditionalProperties</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.essential">Essential</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.additionalPropertiesInput"></a>

```go
func AdditionalPropertiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EssentialInput`<sup>Optional</sup> <a name="EssentialInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.essentialInput"></a>

```go
func EssentialInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.additionalProperties"></a>

```go
func AdditionalProperties() *[]*string
```

- *Type:* *[]*string

---

##### `Essential`<sup>Required</sup> <a name="Essential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.essential"></a>

```go
func Essential() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationOptionalClaimsIdTokenAList <a name="ApplicationOptionalClaimsIdTokenAList" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/applicationoptionalclaims"

applicationoptionalclaims.NewApplicationOptionalClaimsIdTokenAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApplicationOptionalClaimsIdTokenAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.get"></a>

```go
func Get(index *f64) ApplicationOptionalClaimsIdTokenAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationOptionalClaimsIdTokenAOutputReference <a name="ApplicationOptionalClaimsIdTokenAOutputReference" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/applicationoptionalclaims"

applicationoptionalclaims.NewApplicationOptionalClaimsIdTokenAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApplicationOptionalClaimsIdTokenAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resetAdditionalProperties"></a>

```go
func ResetAdditionalProperties()
```

##### `ResetEssential` <a name="ResetEssential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resetEssential"></a>

```go
func ResetEssential()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.essentialInput">EssentialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.additionalProperties">AdditionalProperties</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.essential">Essential</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.additionalPropertiesInput"></a>

```go
func AdditionalPropertiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EssentialInput`<sup>Optional</sup> <a name="EssentialInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.essentialInput"></a>

```go
func EssentialInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.additionalProperties"></a>

```go
func AdditionalProperties() *[]*string
```

- *Type:* *[]*string

---

##### `Essential`<sup>Required</sup> <a name="Essential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.essential"></a>

```go
func Essential() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationOptionalClaimsSaml2TokenAList <a name="ApplicationOptionalClaimsSaml2TokenAList" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/applicationoptionalclaims"

applicationoptionalclaims.NewApplicationOptionalClaimsSaml2TokenAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApplicationOptionalClaimsSaml2TokenAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.get"></a>

```go
func Get(index *f64) ApplicationOptionalClaimsSaml2TokenAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationOptionalClaimsSaml2TokenAOutputReference <a name="ApplicationOptionalClaimsSaml2TokenAOutputReference" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/applicationoptionalclaims"

applicationoptionalclaims.NewApplicationOptionalClaimsSaml2TokenAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApplicationOptionalClaimsSaml2TokenAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resetAdditionalProperties"></a>

```go
func ResetAdditionalProperties()
```

##### `ResetEssential` <a name="ResetEssential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resetEssential"></a>

```go
func ResetEssential()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.essentialInput">EssentialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.additionalProperties">AdditionalProperties</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.essential">Essential</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.additionalPropertiesInput"></a>

```go
func AdditionalPropertiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EssentialInput`<sup>Optional</sup> <a name="EssentialInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.essentialInput"></a>

```go
func EssentialInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.additionalProperties"></a>

```go
func AdditionalProperties() *[]*string
```

- *Type:* *[]*string

---

##### `Essential`<sup>Required</sup> <a name="Essential" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.essential"></a>

```go
func Essential() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationOptionalClaimsTimeoutsOutputReference <a name="ApplicationOptionalClaimsTimeoutsOutputReference" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/applicationoptionalclaims"

applicationoptionalclaims.NewApplicationOptionalClaimsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationOptionalClaimsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



