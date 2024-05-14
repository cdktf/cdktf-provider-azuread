# `privilegedAccessGroupAssignmentSchedule` Submodule <a name="`privilegedAccessGroupAssignmentSchedule` Submodule" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivilegedAccessGroupAssignmentSchedule <a name="PrivilegedAccessGroupAssignmentSchedule" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/privileged_access_group_assignment_schedule azuread_privileged_access_group_assignment_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/privilegedaccessgroupassignmentschedule"

privilegedaccessgroupassignmentschedule.NewPrivilegedAccessGroupAssignmentSchedule(scope Construct, id *string, config PrivilegedAccessGroupAssignmentScheduleConfig) PrivilegedAccessGroupAssignmentSchedule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig">PrivilegedAccessGroupAssignmentScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig">PrivilegedAccessGroupAssignmentScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetExpirationDate">ResetExpirationDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetJustification">ResetJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetPermanentAssignment">ResetPermanentAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetStartDate">ResetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetTicketNumber">ResetTicketNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetTicketSystem">ResetTicketSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.putTimeouts"></a>

```go
func PutTimeouts(value PrivilegedAccessGroupAssignmentScheduleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts">PrivilegedAccessGroupAssignmentScheduleTimeouts</a>

---

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetDuration"></a>

```go
func ResetDuration()
```

##### `ResetExpirationDate` <a name="ResetExpirationDate" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetExpirationDate"></a>

```go
func ResetExpirationDate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetId"></a>

```go
func ResetId()
```

##### `ResetJustification` <a name="ResetJustification" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetJustification"></a>

```go
func ResetJustification()
```

##### `ResetPermanentAssignment` <a name="ResetPermanentAssignment" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetPermanentAssignment"></a>

```go
func ResetPermanentAssignment()
```

##### `ResetStartDate` <a name="ResetStartDate" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetStartDate"></a>

```go
func ResetStartDate()
```

##### `ResetTicketNumber` <a name="ResetTicketNumber" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetTicketNumber"></a>

```go
func ResetTicketNumber()
```

##### `ResetTicketSystem` <a name="ResetTicketSystem" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetTicketSystem"></a>

```go
func ResetTicketSystem()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PrivilegedAccessGroupAssignmentSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/privilegedaccessgroupassignmentschedule"

privilegedaccessgroupassignmentschedule.PrivilegedAccessGroupAssignmentSchedule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/privilegedaccessgroupassignmentschedule"

privilegedaccessgroupassignmentschedule.PrivilegedAccessGroupAssignmentSchedule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/privilegedaccessgroupassignmentschedule"

privilegedaccessgroupassignmentschedule.PrivilegedAccessGroupAssignmentSchedule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/privilegedaccessgroupassignmentschedule"

privilegedaccessgroupassignmentschedule.PrivilegedAccessGroupAssignmentSchedule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PrivilegedAccessGroupAssignmentSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PrivilegedAccessGroupAssignmentSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PrivilegedAccessGroupAssignmentSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/privileged_access_group_assignment_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PrivilegedAccessGroupAssignmentSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference">PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.assignmentTypeInput">AssignmentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.expirationDateInput">ExpirationDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.justificationInput">JustificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.permanentAssignmentInput">PermanentAssignmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.principalIdInput">PrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.startDateInput">StartDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.ticketNumberInput">TicketNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.ticketSystemInput">TicketSystemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.assignmentType">AssignmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.expirationDate">ExpirationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.justification">Justification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.permanentAssignment">PermanentAssignment</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.startDate">StartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.ticketNumber">TicketNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.ticketSystem">TicketSystem</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.timeouts"></a>

```go
func Timeouts() PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference">PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference</a>

---

##### `AssignmentTypeInput`<sup>Optional</sup> <a name="AssignmentTypeInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.assignmentTypeInput"></a>

```go
func AssignmentTypeInput() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `ExpirationDateInput`<sup>Optional</sup> <a name="ExpirationDateInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.expirationDateInput"></a>

```go
func ExpirationDateInput() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JustificationInput`<sup>Optional</sup> <a name="JustificationInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.justificationInput"></a>

```go
func JustificationInput() *string
```

- *Type:* *string

---

##### `PermanentAssignmentInput`<sup>Optional</sup> <a name="PermanentAssignmentInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.permanentAssignmentInput"></a>

```go
func PermanentAssignmentInput() interface{}
```

- *Type:* interface{}

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.principalIdInput"></a>

```go
func PrincipalIdInput() *string
```

- *Type:* *string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.startDateInput"></a>

```go
func StartDateInput() *string
```

- *Type:* *string

---

##### `TicketNumberInput`<sup>Optional</sup> <a name="TicketNumberInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.ticketNumberInput"></a>

```go
func TicketNumberInput() *string
```

- *Type:* *string

---

##### `TicketSystemInput`<sup>Optional</sup> <a name="TicketSystemInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.ticketSystemInput"></a>

```go
func TicketSystemInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AssignmentType`<sup>Required</sup> <a name="AssignmentType" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.assignmentType"></a>

```go
func AssignmentType() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.expirationDate"></a>

```go
func ExpirationDate() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Justification`<sup>Required</sup> <a name="Justification" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.justification"></a>

```go
func Justification() *string
```

- *Type:* *string

---

##### `PermanentAssignment`<sup>Required</sup> <a name="PermanentAssignment" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.permanentAssignment"></a>

```go
func PermanentAssignment() interface{}
```

- *Type:* interface{}

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.startDate"></a>

```go
func StartDate() *string
```

- *Type:* *string

---

##### `TicketNumber`<sup>Required</sup> <a name="TicketNumber" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.ticketNumber"></a>

```go
func TicketNumber() *string
```

- *Type:* *string

---

##### `TicketSystem`<sup>Required</sup> <a name="TicketSystem" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.ticketSystem"></a>

```go
func TicketSystem() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentSchedule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivilegedAccessGroupAssignmentScheduleConfig <a name="PrivilegedAccessGroupAssignmentScheduleConfig" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/privilegedaccessgroupassignmentschedule"

&privilegedaccessgroupassignmentschedule.PrivilegedAccessGroupAssignmentScheduleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AssignmentType: *string,
	GroupId: *string,
	PrincipalId: *string,
	Duration: *string,
	ExpirationDate: *string,
	Id: *string,
	Justification: *string,
	PermanentAssignment: interface{},
	StartDate: *string,
	TicketNumber: *string,
	TicketSystem: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azuread-go/azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.assignmentType">AssignmentType</a></code> | <code>*string</code> | The ID of the assignment to the group. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.groupId">GroupId</a></code> | <code>*string</code> | The ID of the Group representing the scope of the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.principalId">PrincipalId</a></code> | <code>*string</code> | The ID of the Principal assigned to the schedule. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.duration">Duration</a></code> | <code>*string</code> | The duration of the assignment, formatted as an ISO8601 duration string (e.g. P3D for 3 days). |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.expirationDate">ExpirationDate</a></code> | <code>*string</code> | The date that this assignment expires, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z). |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/privileged_access_group_assignment_schedule#id PrivilegedAccessGroupAssignmentSchedule#id}. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.justification">Justification</a></code> | <code>*string</code> | The justification for the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.permanentAssignment">PermanentAssignment</a></code> | <code>interface{}</code> | Is the assignment permanent. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.startDate">StartDate</a></code> | <code>*string</code> | The date that this assignment starts, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z). |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.ticketNumber">TicketNumber</a></code> | <code>*string</code> | The ticket number authorising the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.ticketSystem">TicketSystem</a></code> | <code>*string</code> | The ticket system authorising the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts">PrivilegedAccessGroupAssignmentScheduleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssignmentType`<sup>Required</sup> <a name="AssignmentType" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.assignmentType"></a>

```go
AssignmentType *string
```

- *Type:* *string

The ID of the assignment to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/privileged_access_group_assignment_schedule#assignment_type PrivilegedAccessGroupAssignmentSchedule#assignment_type}

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

The ID of the Group representing the scope of the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/privileged_access_group_assignment_schedule#group_id PrivilegedAccessGroupAssignmentSchedule#group_id}

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.principalId"></a>

```go
PrincipalId *string
```

- *Type:* *string

The ID of the Principal assigned to the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/privileged_access_group_assignment_schedule#principal_id PrivilegedAccessGroupAssignmentSchedule#principal_id}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

The duration of the assignment, formatted as an ISO8601 duration string (e.g. P3D for 3 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/privileged_access_group_assignment_schedule#duration PrivilegedAccessGroupAssignmentSchedule#duration}

---

##### `ExpirationDate`<sup>Optional</sup> <a name="ExpirationDate" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.expirationDate"></a>

```go
ExpirationDate *string
```

- *Type:* *string

The date that this assignment expires, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/privileged_access_group_assignment_schedule#expiration_date PrivilegedAccessGroupAssignmentSchedule#expiration_date}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/privileged_access_group_assignment_schedule#id PrivilegedAccessGroupAssignmentSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Justification`<sup>Optional</sup> <a name="Justification" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.justification"></a>

```go
Justification *string
```

- *Type:* *string

The justification for the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/privileged_access_group_assignment_schedule#justification PrivilegedAccessGroupAssignmentSchedule#justification}

---

##### `PermanentAssignment`<sup>Optional</sup> <a name="PermanentAssignment" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.permanentAssignment"></a>

```go
PermanentAssignment interface{}
```

- *Type:* interface{}

Is the assignment permanent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/privileged_access_group_assignment_schedule#permanent_assignment PrivilegedAccessGroupAssignmentSchedule#permanent_assignment}

---

##### `StartDate`<sup>Optional</sup> <a name="StartDate" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.startDate"></a>

```go
StartDate *string
```

- *Type:* *string

The date that this assignment starts, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/privileged_access_group_assignment_schedule#start_date PrivilegedAccessGroupAssignmentSchedule#start_date}

---

##### `TicketNumber`<sup>Optional</sup> <a name="TicketNumber" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.ticketNumber"></a>

```go
TicketNumber *string
```

- *Type:* *string

The ticket number authorising the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/privileged_access_group_assignment_schedule#ticket_number PrivilegedAccessGroupAssignmentSchedule#ticket_number}

---

##### `TicketSystem`<sup>Optional</sup> <a name="TicketSystem" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.ticketSystem"></a>

```go
TicketSystem *string
```

- *Type:* *string

The ticket system authorising the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/privileged_access_group_assignment_schedule#ticket_system PrivilegedAccessGroupAssignmentSchedule#ticket_system}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleConfig.property.timeouts"></a>

```go
Timeouts PrivilegedAccessGroupAssignmentScheduleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts">PrivilegedAccessGroupAssignmentScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/privileged_access_group_assignment_schedule#timeouts PrivilegedAccessGroupAssignmentSchedule#timeouts}

---

### PrivilegedAccessGroupAssignmentScheduleTimeouts <a name="PrivilegedAccessGroupAssignmentScheduleTimeouts" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/privilegedaccessgroupassignmentschedule"

&privilegedaccessgroupassignmentschedule.PrivilegedAccessGroupAssignmentScheduleTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/privileged_access_group_assignment_schedule#create PrivilegedAccessGroupAssignmentSchedule#create}. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/privileged_access_group_assignment_schedule#delete PrivilegedAccessGroupAssignmentSchedule#delete}. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/privileged_access_group_assignment_schedule#read PrivilegedAccessGroupAssignmentSchedule#read}. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/privileged_access_group_assignment_schedule#update PrivilegedAccessGroupAssignmentSchedule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/privileged_access_group_assignment_schedule#create PrivilegedAccessGroupAssignmentSchedule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/privileged_access_group_assignment_schedule#delete PrivilegedAccessGroupAssignmentSchedule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/privileged_access_group_assignment_schedule#read PrivilegedAccessGroupAssignmentSchedule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/privileged_access_group_assignment_schedule#update PrivilegedAccessGroupAssignmentSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference <a name="PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/privilegedaccessgroupassignmentschedule"

privilegedaccessgroupassignmentschedule.NewPrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.privilegedAccessGroupAssignmentSchedule.PrivilegedAccessGroupAssignmentScheduleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



