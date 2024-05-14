# `servicePrincipalPassword` Submodule <a name="`servicePrincipalPassword` Submodule" id="@cdktf/provider-azuread.servicePrincipalPassword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipalPassword <a name="ServicePrincipalPassword" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_password azuread_service_principal_password}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipalpassword"

serviceprincipalpassword.NewServicePrincipalPassword(scope Construct, id *string, config ServicePrincipalPasswordConfig) ServicePrincipalPassword
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig">ServicePrincipalPasswordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig">ServicePrincipalPasswordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.resetEndDateRelative">ResetEndDateRelative</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.resetRotateWhenChanged">ResetRotateWhenChanged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.resetStartDate">ResetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.putTimeouts"></a>

```go
func PutTimeouts(value ServicePrincipalPasswordTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeouts">ServicePrincipalPasswordTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.resetEndDate"></a>

```go
func ResetEndDate()
```

##### `ResetEndDateRelative` <a name="ResetEndDateRelative" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.resetEndDateRelative"></a>

```go
func ResetEndDateRelative()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.resetId"></a>

```go
func ResetId()
```

##### `ResetRotateWhenChanged` <a name="ResetRotateWhenChanged" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.resetRotateWhenChanged"></a>

```go
func ResetRotateWhenChanged()
```

##### `ResetStartDate` <a name="ResetStartDate" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.resetStartDate"></a>

```go
func ResetStartDate()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServicePrincipalPassword resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipalpassword"

serviceprincipalpassword.ServicePrincipalPassword_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipalpassword"

serviceprincipalpassword.ServicePrincipalPassword_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipalpassword"

serviceprincipalpassword.ServicePrincipalPassword_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipalpassword"

serviceprincipalpassword.ServicePrincipalPassword_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ServicePrincipalPassword resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServicePrincipalPassword to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServicePrincipalPassword that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_password#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ServicePrincipalPassword to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference">ServicePrincipalPasswordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.endDateInput">EndDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.endDateRelativeInput">EndDateRelativeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.rotateWhenChangedInput">RotateWhenChangedInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.startDateInput">StartDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.endDate">EndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.endDateRelative">EndDateRelative</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.rotateWhenChanged">RotateWhenChanged</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.startDate">StartDate</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.timeouts"></a>

```go
func Timeouts() ServicePrincipalPasswordTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference">ServicePrincipalPasswordTimeoutsOutputReference</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.endDateInput"></a>

```go
func EndDateInput() *string
```

- *Type:* *string

---

##### `EndDateRelativeInput`<sup>Optional</sup> <a name="EndDateRelativeInput" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.endDateRelativeInput"></a>

```go
func EndDateRelativeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RotateWhenChangedInput`<sup>Optional</sup> <a name="RotateWhenChangedInput" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.rotateWhenChangedInput"></a>

```go
func RotateWhenChangedInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.servicePrincipalIdInput"></a>

```go
func ServicePrincipalIdInput() *string
```

- *Type:* *string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.startDateInput"></a>

```go
func StartDateInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.endDate"></a>

```go
func EndDate() *string
```

- *Type:* *string

---

##### `EndDateRelative`<sup>Required</sup> <a name="EndDateRelative" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.endDateRelative"></a>

```go
func EndDateRelative() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RotateWhenChanged`<sup>Required</sup> <a name="RotateWhenChanged" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.rotateWhenChanged"></a>

```go
func RotateWhenChanged() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.servicePrincipalId"></a>

```go
func ServicePrincipalId() *string
```

- *Type:* *string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.startDate"></a>

```go
func StartDate() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPassword.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalPasswordConfig <a name="ServicePrincipalPasswordConfig" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipalpassword"

&serviceprincipalpassword.ServicePrincipalPasswordConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ServicePrincipalId: *string,
	DisplayName: *string,
	EndDate: *string,
	EndDateRelative: *string,
	Id: *string,
	RotateWhenChanged: *map[string]*string,
	StartDate: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azuread-go/azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*string</code> | The object ID of the service principal for which this password should be created. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | A display name for the password. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.endDate">EndDate</a></code> | <code>*string</code> | The end date until which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.endDateRelative">EndDateRelative</a></code> | <code>*string</code> | A relative duration for which the password is valid until, for example `240h` (10 days) or `2400h30m`. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_password#id ServicePrincipalPassword#id}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.rotateWhenChanged">RotateWhenChanged</a></code> | <code>*map[string]*string</code> | Arbitrary map of values that, when changed, will trigger rotation of the password. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.startDate">StartDate</a></code> | <code>*string</code> | The start date from which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date is used. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeouts">ServicePrincipalPasswordTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.servicePrincipalId"></a>

```go
ServicePrincipalId *string
```

- *Type:* *string

The object ID of the service principal for which this password should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_password#service_principal_id ServicePrincipalPassword#service_principal_id}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

A display name for the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_password#display_name ServicePrincipalPassword#display_name}

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.endDate"></a>

```go
EndDate *string
```

- *Type:* *string

The end date until which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_password#end_date ServicePrincipalPassword#end_date}

---

##### `EndDateRelative`<sup>Optional</sup> <a name="EndDateRelative" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.endDateRelative"></a>

```go
EndDateRelative *string
```

- *Type:* *string

A relative duration for which the password is valid until, for example `240h` (10 days) or `2400h30m`.

Changing this field forces a new resource to be created

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_password#end_date_relative ServicePrincipalPassword#end_date_relative}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_password#id ServicePrincipalPassword#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RotateWhenChanged`<sup>Optional</sup> <a name="RotateWhenChanged" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.rotateWhenChanged"></a>

```go
RotateWhenChanged *map[string]*string
```

- *Type:* *map[string]*string

Arbitrary map of values that, when changed, will trigger rotation of the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_password#rotate_when_changed ServicePrincipalPassword#rotate_when_changed}

---

##### `StartDate`<sup>Optional</sup> <a name="StartDate" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.startDate"></a>

```go
StartDate *string
```

- *Type:* *string

The start date from which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_password#start_date ServicePrincipalPassword#start_date}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordConfig.property.timeouts"></a>

```go
Timeouts ServicePrincipalPasswordTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeouts">ServicePrincipalPasswordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_password#timeouts ServicePrincipalPassword#timeouts}

---

### ServicePrincipalPasswordTimeouts <a name="ServicePrincipalPasswordTimeouts" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipalpassword"

&serviceprincipalpassword.ServicePrincipalPasswordTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_password#create ServicePrincipalPassword#create}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_password#delete ServicePrincipalPassword#delete}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_password#read ServicePrincipalPassword#read}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_password#update ServicePrincipalPassword#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_password#create ServicePrincipalPassword#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_password#delete ServicePrincipalPassword#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_password#read ServicePrincipalPassword#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_password#update ServicePrincipalPassword#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicePrincipalPasswordTimeoutsOutputReference <a name="ServicePrincipalPasswordTimeoutsOutputReference" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipalpassword"

serviceprincipalpassword.NewServicePrincipalPasswordTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServicePrincipalPasswordTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.servicePrincipalPassword.ServicePrincipalPasswordTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



