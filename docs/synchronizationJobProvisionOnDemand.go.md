# `synchronizationJobProvisionOnDemand` Submodule <a name="`synchronizationJobProvisionOnDemand` Submodule" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynchronizationJobProvisionOnDemand <a name="SynchronizationJobProvisionOnDemand" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/synchronization_job_provision_on_demand azuread_synchronization_job_provision_on_demand}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/synchronizationjobprovisionondemand"

synchronizationjobprovisionondemand.NewSynchronizationJobProvisionOnDemand(scope Construct, id *string, config SynchronizationJobProvisionOnDemandConfig) SynchronizationJobProvisionOnDemand
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig">SynchronizationJobProvisionOnDemandConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.putParameter"></a>

```go
func PutParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.putParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.putTimeouts"></a>

```go
func PutTimeouts(value SynchronizationJobProvisionOnDemandTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts">SynchronizationJobProvisionOnDemandTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTriggers` <a name="ResetTriggers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.resetTriggers"></a>

```go
func ResetTriggers()
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

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/synchronizationjobprovisionondemand"

synchronizationjobprovisionondemand.SynchronizationJobProvisionOnDemand_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/synchronizationjobprovisionondemand"

synchronizationjobprovisionondemand.SynchronizationJobProvisionOnDemand_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/synchronizationjobprovisionondemand"

synchronizationjobprovisionondemand.SynchronizationJobProvisionOnDemand_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/synchronizationjobprovisionondemand"

synchronizationjobprovisionondemand.SynchronizationJobProvisionOnDemand_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SynchronizationJobProvisionOnDemand resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SynchronizationJobProvisionOnDemand to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SynchronizationJobProvisionOnDemand that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/synchronization_job_provision_on_demand#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SynchronizationJobProvisionOnDemand to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList">SynchronizationJobProvisionOnDemandParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference">SynchronizationJobProvisionOnDemandTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.parameterInput">ParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.synchronizationJobIdInput">SynchronizationJobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.triggersInput">TriggersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.synchronizationJobId">SynchronizationJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.triggers">Triggers</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.parameter"></a>

```go
func Parameter() SynchronizationJobProvisionOnDemandParameterList
```

- *Type:* <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList">SynchronizationJobProvisionOnDemandParameterList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.timeouts"></a>

```go
func Timeouts() SynchronizationJobProvisionOnDemandTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference">SynchronizationJobProvisionOnDemandTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.parameterInput"></a>

```go
func ParameterInput() interface{}
```

- *Type:* interface{}

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.servicePrincipalIdInput"></a>

```go
func ServicePrincipalIdInput() *string
```

- *Type:* *string

---

##### `SynchronizationJobIdInput`<sup>Optional</sup> <a name="SynchronizationJobIdInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.synchronizationJobIdInput"></a>

```go
func SynchronizationJobIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TriggersInput`<sup>Optional</sup> <a name="TriggersInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.triggersInput"></a>

```go
func TriggersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.servicePrincipalId"></a>

```go
func ServicePrincipalId() *string
```

- *Type:* *string

---

##### `SynchronizationJobId`<sup>Required</sup> <a name="SynchronizationJobId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.synchronizationJobId"></a>

```go
func SynchronizationJobId() *string
```

- *Type:* *string

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.triggers"></a>

```go
func Triggers() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SynchronizationJobProvisionOnDemandConfig <a name="SynchronizationJobProvisionOnDemandConfig" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/synchronizationjobprovisionondemand"

&synchronizationjobprovisionondemand.SynchronizationJobProvisionOnDemandConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Parameter: interface{},
	ServicePrincipalId: *string,
	SynchronizationJobId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azuread-go/azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts,
	Triggers: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.parameter">Parameter</a></code> | <code>interface{}</code> | parameter block. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*string</code> | The object ID of the service principal for which this synchronization job should be provisioned. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.synchronizationJobId">SynchronizationJobId</a></code> | <code>*string</code> | The identifier for the synchronization jop. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/synchronization_job_provision_on_demand#id SynchronizationJobProvisionOnDemand#id}. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts">SynchronizationJobProvisionOnDemandTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.triggers">Triggers</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/synchronization_job_provision_on_demand#triggers SynchronizationJobProvisionOnDemand#triggers}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.parameter"></a>

```go
Parameter interface{}
```

- *Type:* interface{}

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/synchronization_job_provision_on_demand#parameter SynchronizationJobProvisionOnDemand#parameter}

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.servicePrincipalId"></a>

```go
ServicePrincipalId *string
```

- *Type:* *string

The object ID of the service principal for which this synchronization job should be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/synchronization_job_provision_on_demand#service_principal_id SynchronizationJobProvisionOnDemand#service_principal_id}

---

##### `SynchronizationJobId`<sup>Required</sup> <a name="SynchronizationJobId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.synchronizationJobId"></a>

```go
SynchronizationJobId *string
```

- *Type:* *string

The identifier for the synchronization jop.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/synchronization_job_provision_on_demand#synchronization_job_id SynchronizationJobProvisionOnDemand#synchronization_job_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/synchronization_job_provision_on_demand#id SynchronizationJobProvisionOnDemand#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.timeouts"></a>

```go
Timeouts SynchronizationJobProvisionOnDemandTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts">SynchronizationJobProvisionOnDemandTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/synchronization_job_provision_on_demand#timeouts SynchronizationJobProvisionOnDemand#timeouts}

---

##### `Triggers`<sup>Optional</sup> <a name="Triggers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.triggers"></a>

```go
Triggers *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/synchronization_job_provision_on_demand#triggers SynchronizationJobProvisionOnDemand#triggers}.

---

### SynchronizationJobProvisionOnDemandParameter <a name="SynchronizationJobProvisionOnDemandParameter" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/synchronizationjobprovisionondemand"

&synchronizationjobprovisionondemand.SynchronizationJobProvisionOnDemandParameter {
	RuleId: *string,
	Subject: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter.property.ruleId">RuleId</a></code> | <code>*string</code> | The identifier of the synchronization rule to be applied. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter.property.subject">Subject</a></code> | <code>interface{}</code> | subject block. |

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter.property.ruleId"></a>

```go
RuleId *string
```

- *Type:* *string

The identifier of the synchronization rule to be applied.

This rule ID is defined in the schema for a given synchronization job or template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/synchronization_job_provision_on_demand#rule_id SynchronizationJobProvisionOnDemand#rule_id}

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter.property.subject"></a>

```go
Subject interface{}
```

- *Type:* interface{}

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/synchronization_job_provision_on_demand#subject SynchronizationJobProvisionOnDemand#subject}

---

### SynchronizationJobProvisionOnDemandParameterSubject <a name="SynchronizationJobProvisionOnDemandParameterSubject" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/synchronizationjobprovisionondemand"

&synchronizationjobprovisionondemand.SynchronizationJobProvisionOnDemandParameterSubject {
	ObjectId: *string,
	ObjectTypeName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject.property.objectId">ObjectId</a></code> | <code>*string</code> | The identifier of an object to which a synchronization job is to be applied. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject.property.objectTypeName">ObjectTypeName</a></code> | <code>*string</code> | The type of the object to which a synchronization job is to be applied. |

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

The identifier of an object to which a synchronization job is to be applied.

Can be one of the following: (1) An onPremisesDistinguishedName for synchronization from Active Directory to Azure AD. (2) The user ID for synchronization from Azure AD to a third-party. (3) The Worker ID of the Workday worker for synchronization from Workday to either Active Directory or Azure AD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/synchronization_job_provision_on_demand#object_id SynchronizationJobProvisionOnDemand#object_id}

---

##### `ObjectTypeName`<sup>Required</sup> <a name="ObjectTypeName" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject.property.objectTypeName"></a>

```go
ObjectTypeName *string
```

- *Type:* *string

The type of the object to which a synchronization job is to be applied.

Can be one of the following: `user` for synchronizing between Active Directory and Azure AD, `User` for synchronizing a user between Azure AD and a third-party application, `Worker` for synchronization a user between Workday and either Active Directory or Azure AD, `Group` for synchronizing a group between Azure AD and a third-party application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/synchronization_job_provision_on_demand#object_type_name SynchronizationJobProvisionOnDemand#object_type_name}

---

### SynchronizationJobProvisionOnDemandTimeouts <a name="SynchronizationJobProvisionOnDemandTimeouts" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/synchronizationjobprovisionondemand"

&synchronizationjobprovisionondemand.SynchronizationJobProvisionOnDemandTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/synchronization_job_provision_on_demand#create SynchronizationJobProvisionOnDemand#create}. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/synchronization_job_provision_on_demand#delete SynchronizationJobProvisionOnDemand#delete}. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/synchronization_job_provision_on_demand#read SynchronizationJobProvisionOnDemand#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/synchronization_job_provision_on_demand#create SynchronizationJobProvisionOnDemand#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/synchronization_job_provision_on_demand#delete SynchronizationJobProvisionOnDemand#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/synchronization_job_provision_on_demand#read SynchronizationJobProvisionOnDemand#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynchronizationJobProvisionOnDemandParameterList <a name="SynchronizationJobProvisionOnDemandParameterList" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/synchronizationjobprovisionondemand"

synchronizationjobprovisionondemand.NewSynchronizationJobProvisionOnDemandParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SynchronizationJobProvisionOnDemandParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.get"></a>

```go
func Get(index *f64) SynchronizationJobProvisionOnDemandParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SynchronizationJobProvisionOnDemandParameterOutputReference <a name="SynchronizationJobProvisionOnDemandParameterOutputReference" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/synchronizationjobprovisionondemand"

synchronizationjobprovisionondemand.NewSynchronizationJobProvisionOnDemandParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SynchronizationJobProvisionOnDemandParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSubject` <a name="PutSubject" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.putSubject"></a>

```go
func PutSubject(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.putSubject.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.subject">Subject</a></code> | <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList">SynchronizationJobProvisionOnDemandParameterSubjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.ruleIdInput">RuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.subjectInput">SubjectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.subject"></a>

```go
func Subject() SynchronizationJobProvisionOnDemandParameterSubjectList
```

- *Type:* <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList">SynchronizationJobProvisionOnDemandParameterSubjectList</a>

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.ruleIdInput"></a>

```go
func RuleIdInput() *string
```

- *Type:* *string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.subjectInput"></a>

```go
func SubjectInput() interface{}
```

- *Type:* interface{}

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SynchronizationJobProvisionOnDemandParameterSubjectList <a name="SynchronizationJobProvisionOnDemandParameterSubjectList" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/synchronizationjobprovisionondemand"

synchronizationjobprovisionondemand.NewSynchronizationJobProvisionOnDemandParameterSubjectList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SynchronizationJobProvisionOnDemandParameterSubjectList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.get"></a>

```go
func Get(index *f64) SynchronizationJobProvisionOnDemandParameterSubjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SynchronizationJobProvisionOnDemandParameterSubjectOutputReference <a name="SynchronizationJobProvisionOnDemandParameterSubjectOutputReference" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/synchronizationjobprovisionondemand"

synchronizationjobprovisionondemand.NewSynchronizationJobProvisionOnDemandParameterSubjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SynchronizationJobProvisionOnDemandParameterSubjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectTypeNameInput">ObjectTypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectTypeName">ObjectTypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `ObjectTypeNameInput`<sup>Optional</sup> <a name="ObjectTypeNameInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectTypeNameInput"></a>

```go
func ObjectTypeNameInput() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `ObjectTypeName`<sup>Required</sup> <a name="ObjectTypeName" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectTypeName"></a>

```go
func ObjectTypeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SynchronizationJobProvisionOnDemandTimeoutsOutputReference <a name="SynchronizationJobProvisionOnDemandTimeoutsOutputReference" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/synchronizationjobprovisionondemand"

synchronizationjobprovisionondemand.NewSynchronizationJobProvisionOnDemandTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SynchronizationJobProvisionOnDemandTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



