# `groupRoleManagementPolicy` Submodule <a name="`groupRoleManagementPolicy` Submodule" id="@cdktf/provider-azuread.groupRoleManagementPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupRoleManagementPolicy <a name="GroupRoleManagementPolicy" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy azuread_group_role_management_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.NewGroupRoleManagementPolicy(scope Construct, id *string, config GroupRoleManagementPolicyConfig) GroupRoleManagementPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig">GroupRoleManagementPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig">GroupRoleManagementPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActivationRules">PutActivationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActiveAssignmentRules">PutActiveAssignmentRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putEligibleAssignmentRules">PutEligibleAssignmentRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putNotificationRules">PutNotificationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetActivationRules">ResetActivationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetActiveAssignmentRules">ResetActiveAssignmentRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetEligibleAssignmentRules">ResetEligibleAssignmentRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetNotificationRules">ResetNotificationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActivationRules` <a name="PutActivationRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActivationRules"></a>

```go
func PutActivationRules(value GroupRoleManagementPolicyActivationRules)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActivationRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules">GroupRoleManagementPolicyActivationRules</a>

---

##### `PutActiveAssignmentRules` <a name="PutActiveAssignmentRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActiveAssignmentRules"></a>

```go
func PutActiveAssignmentRules(value GroupRoleManagementPolicyActiveAssignmentRules)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActiveAssignmentRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules">GroupRoleManagementPolicyActiveAssignmentRules</a>

---

##### `PutEligibleAssignmentRules` <a name="PutEligibleAssignmentRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putEligibleAssignmentRules"></a>

```go
func PutEligibleAssignmentRules(value GroupRoleManagementPolicyEligibleAssignmentRules)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putEligibleAssignmentRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules">GroupRoleManagementPolicyEligibleAssignmentRules</a>

---

##### `PutNotificationRules` <a name="PutNotificationRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putNotificationRules"></a>

```go
func PutNotificationRules(value GroupRoleManagementPolicyNotificationRules)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putNotificationRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules">GroupRoleManagementPolicyNotificationRules</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GroupRoleManagementPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts">GroupRoleManagementPolicyTimeouts</a>

---

##### `ResetActivationRules` <a name="ResetActivationRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetActivationRules"></a>

```go
func ResetActivationRules()
```

##### `ResetActiveAssignmentRules` <a name="ResetActiveAssignmentRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetActiveAssignmentRules"></a>

```go
func ResetActiveAssignmentRules()
```

##### `ResetEligibleAssignmentRules` <a name="ResetEligibleAssignmentRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetEligibleAssignmentRules"></a>

```go
func ResetEligibleAssignmentRules()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetNotificationRules` <a name="ResetNotificationRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetNotificationRules"></a>

```go
func ResetNotificationRules()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GroupRoleManagementPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.GroupRoleManagementPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.GroupRoleManagementPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.GroupRoleManagementPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.GroupRoleManagementPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GroupRoleManagementPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GroupRoleManagementPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GroupRoleManagementPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GroupRoleManagementPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activationRules">ActivationRules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference">GroupRoleManagementPolicyActivationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activeAssignmentRules">ActiveAssignmentRules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference">GroupRoleManagementPolicyActiveAssignmentRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.eligibleAssignmentRules">EligibleAssignmentRules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference">GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.notificationRules">NotificationRules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference">GroupRoleManagementPolicyNotificationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference">GroupRoleManagementPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activationRulesInput">ActivationRulesInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules">GroupRoleManagementPolicyActivationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activeAssignmentRulesInput">ActiveAssignmentRulesInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules">GroupRoleManagementPolicyActiveAssignmentRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.eligibleAssignmentRulesInput">EligibleAssignmentRulesInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules">GroupRoleManagementPolicyEligibleAssignmentRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.notificationRulesInput">NotificationRulesInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules">GroupRoleManagementPolicyNotificationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.roleIdInput">RoleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.roleId">RoleId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActivationRules`<sup>Required</sup> <a name="ActivationRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activationRules"></a>

```go
func ActivationRules() GroupRoleManagementPolicyActivationRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference">GroupRoleManagementPolicyActivationRulesOutputReference</a>

---

##### `ActiveAssignmentRules`<sup>Required</sup> <a name="ActiveAssignmentRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activeAssignmentRules"></a>

```go
func ActiveAssignmentRules() GroupRoleManagementPolicyActiveAssignmentRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference">GroupRoleManagementPolicyActiveAssignmentRulesOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EligibleAssignmentRules`<sup>Required</sup> <a name="EligibleAssignmentRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.eligibleAssignmentRules"></a>

```go
func EligibleAssignmentRules() GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference">GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference</a>

---

##### `NotificationRules`<sup>Required</sup> <a name="NotificationRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.notificationRules"></a>

```go
func NotificationRules() GroupRoleManagementPolicyNotificationRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference">GroupRoleManagementPolicyNotificationRulesOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.timeouts"></a>

```go
func Timeouts() GroupRoleManagementPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference">GroupRoleManagementPolicyTimeoutsOutputReference</a>

---

##### `ActivationRulesInput`<sup>Optional</sup> <a name="ActivationRulesInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activationRulesInput"></a>

```go
func ActivationRulesInput() GroupRoleManagementPolicyActivationRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules">GroupRoleManagementPolicyActivationRules</a>

---

##### `ActiveAssignmentRulesInput`<sup>Optional</sup> <a name="ActiveAssignmentRulesInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activeAssignmentRulesInput"></a>

```go
func ActiveAssignmentRulesInput() GroupRoleManagementPolicyActiveAssignmentRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules">GroupRoleManagementPolicyActiveAssignmentRules</a>

---

##### `EligibleAssignmentRulesInput`<sup>Optional</sup> <a name="EligibleAssignmentRulesInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.eligibleAssignmentRulesInput"></a>

```go
func EligibleAssignmentRulesInput() GroupRoleManagementPolicyEligibleAssignmentRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules">GroupRoleManagementPolicyEligibleAssignmentRules</a>

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NotificationRulesInput`<sup>Optional</sup> <a name="NotificationRulesInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.notificationRulesInput"></a>

```go
func NotificationRulesInput() GroupRoleManagementPolicyNotificationRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules">GroupRoleManagementPolicyNotificationRules</a>

---

##### `RoleIdInput`<sup>Optional</sup> <a name="RoleIdInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.roleIdInput"></a>

```go
func RoleIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.roleId"></a>

```go
func RoleId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupRoleManagementPolicyActivationRules <a name="GroupRoleManagementPolicyActivationRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

&grouprolemanagementpolicy.GroupRoleManagementPolicyActivationRules {
	ApprovalStage: github.com/cdktf/cdktf-provider-azuread-go/azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage,
	MaximumDuration: *string,
	RequireApproval: interface{},
	RequiredConditionalAccessAuthenticationContext: *string,
	RequireJustification: interface{},
	RequireMultifactorAuthentication: interface{},
	RequireTicketInfo: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.approvalStage">ApprovalStage</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage">GroupRoleManagementPolicyActivationRulesApprovalStage</a></code> | approval_stage block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.maximumDuration">MaximumDuration</a></code> | <code>*string</code> | The time after which the an activation can be valid for. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireApproval">RequireApproval</a></code> | <code>interface{}</code> | Whether an approval is required for activation. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requiredConditionalAccessAuthenticationContext">RequiredConditionalAccessAuthenticationContext</a></code> | <code>*string</code> | Whether a conditional access context is required during activation. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireJustification">RequireJustification</a></code> | <code>interface{}</code> | Whether a justification is required during activation. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireMultifactorAuthentication">RequireMultifactorAuthentication</a></code> | <code>interface{}</code> | Whether multi-factor authentication is required during activation. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireTicketInfo">RequireTicketInfo</a></code> | <code>interface{}</code> | Whether ticket information is required during activation. |

---

##### `ApprovalStage`<sup>Optional</sup> <a name="ApprovalStage" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.approvalStage"></a>

```go
ApprovalStage GroupRoleManagementPolicyActivationRulesApprovalStage
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage">GroupRoleManagementPolicyActivationRulesApprovalStage</a>

approval_stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#approval_stage GroupRoleManagementPolicy#approval_stage}

---

##### `MaximumDuration`<sup>Optional</sup> <a name="MaximumDuration" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.maximumDuration"></a>

```go
MaximumDuration *string
```

- *Type:* *string

The time after which the an activation can be valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#maximum_duration GroupRoleManagementPolicy#maximum_duration}

---

##### `RequireApproval`<sup>Optional</sup> <a name="RequireApproval" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireApproval"></a>

```go
RequireApproval interface{}
```

- *Type:* interface{}

Whether an approval is required for activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#require_approval GroupRoleManagementPolicy#require_approval}

---

##### `RequiredConditionalAccessAuthenticationContext`<sup>Optional</sup> <a name="RequiredConditionalAccessAuthenticationContext" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requiredConditionalAccessAuthenticationContext"></a>

```go
RequiredConditionalAccessAuthenticationContext *string
```

- *Type:* *string

Whether a conditional access context is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#required_conditional_access_authentication_context GroupRoleManagementPolicy#required_conditional_access_authentication_context}

---

##### `RequireJustification`<sup>Optional</sup> <a name="RequireJustification" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireJustification"></a>

```go
RequireJustification interface{}
```

- *Type:* interface{}

Whether a justification is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#require_justification GroupRoleManagementPolicy#require_justification}

---

##### `RequireMultifactorAuthentication`<sup>Optional</sup> <a name="RequireMultifactorAuthentication" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireMultifactorAuthentication"></a>

```go
RequireMultifactorAuthentication interface{}
```

- *Type:* interface{}

Whether multi-factor authentication is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#require_multifactor_authentication GroupRoleManagementPolicy#require_multifactor_authentication}

---

##### `RequireTicketInfo`<sup>Optional</sup> <a name="RequireTicketInfo" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireTicketInfo"></a>

```go
RequireTicketInfo interface{}
```

- *Type:* interface{}

Whether ticket information is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#require_ticket_info GroupRoleManagementPolicy#require_ticket_info}

---

### GroupRoleManagementPolicyActivationRulesApprovalStage <a name="GroupRoleManagementPolicyActivationRulesApprovalStage" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

&grouprolemanagementpolicy.GroupRoleManagementPolicyActivationRulesApprovalStage {
	PrimaryApprover: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage.property.primaryApprover">PrimaryApprover</a></code> | <code>interface{}</code> | primary_approver block. |

---

##### `PrimaryApprover`<sup>Required</sup> <a name="PrimaryApprover" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage.property.primaryApprover"></a>

```go
PrimaryApprover interface{}
```

- *Type:* interface{}

primary_approver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#primary_approver GroupRoleManagementPolicy#primary_approver}

---

### GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover <a name="GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

&grouprolemanagementpolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover {
	ObjectId: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.property.objectId">ObjectId</a></code> | <code>*string</code> | The ID of the object to act as an approver. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.property.type">Type</a></code> | <code>*string</code> | The type of object acting as an approver. |

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

The ID of the object to act as an approver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#object_id GroupRoleManagementPolicy#object_id}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of object acting as an approver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#type GroupRoleManagementPolicy#type}

---

### GroupRoleManagementPolicyActiveAssignmentRules <a name="GroupRoleManagementPolicyActiveAssignmentRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

&grouprolemanagementpolicy.GroupRoleManagementPolicyActiveAssignmentRules {
	ExpirationRequired: interface{},
	ExpireAfter: *string,
	RequireJustification: interface{},
	RequireMultifactorAuthentication: interface{},
	RequireTicketInfo: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.expirationRequired">ExpirationRequired</a></code> | <code>interface{}</code> | Must the assignment have an expiry date. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.expireAfter">ExpireAfter</a></code> | <code>*string</code> | The duration after which assignments expire. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.requireJustification">RequireJustification</a></code> | <code>interface{}</code> | Whether a justification is required to make an assignment. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.requireMultifactorAuthentication">RequireMultifactorAuthentication</a></code> | <code>interface{}</code> | Whether multi-factor authentication is required to make an assignment. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.requireTicketInfo">RequireTicketInfo</a></code> | <code>interface{}</code> | Whether ticket information is required to make an assignment. |

---

##### `ExpirationRequired`<sup>Optional</sup> <a name="ExpirationRequired" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.expirationRequired"></a>

```go
ExpirationRequired interface{}
```

- *Type:* interface{}

Must the assignment have an expiry date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#expiration_required GroupRoleManagementPolicy#expiration_required}

---

##### `ExpireAfter`<sup>Optional</sup> <a name="ExpireAfter" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.expireAfter"></a>

```go
ExpireAfter *string
```

- *Type:* *string

The duration after which assignments expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#expire_after GroupRoleManagementPolicy#expire_after}

---

##### `RequireJustification`<sup>Optional</sup> <a name="RequireJustification" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.requireJustification"></a>

```go
RequireJustification interface{}
```

- *Type:* interface{}

Whether a justification is required to make an assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#require_justification GroupRoleManagementPolicy#require_justification}

---

##### `RequireMultifactorAuthentication`<sup>Optional</sup> <a name="RequireMultifactorAuthentication" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.requireMultifactorAuthentication"></a>

```go
RequireMultifactorAuthentication interface{}
```

- *Type:* interface{}

Whether multi-factor authentication is required to make an assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#require_multifactor_authentication GroupRoleManagementPolicy#require_multifactor_authentication}

---

##### `RequireTicketInfo`<sup>Optional</sup> <a name="RequireTicketInfo" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.requireTicketInfo"></a>

```go
RequireTicketInfo interface{}
```

- *Type:* interface{}

Whether ticket information is required to make an assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#require_ticket_info GroupRoleManagementPolicy#require_ticket_info}

---

### GroupRoleManagementPolicyConfig <a name="GroupRoleManagementPolicyConfig" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

&grouprolemanagementpolicy.GroupRoleManagementPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GroupId: *string,
	RoleId: *string,
	ActivationRules: github.com/cdktf/cdktf-provider-azuread-go/azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules,
	ActiveAssignmentRules: github.com/cdktf/cdktf-provider-azuread-go/azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules,
	EligibleAssignmentRules: github.com/cdktf/cdktf-provider-azuread-go/azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules,
	Id: *string,
	NotificationRules: github.com/cdktf/cdktf-provider-azuread-go/azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules,
	Timeouts: github.com/cdktf/cdktf-provider-azuread-go/azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.groupId">GroupId</a></code> | <code>*string</code> | ID of the group to which this policy is assigned. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.roleId">RoleId</a></code> | <code>*string</code> | The ID of the role of this policy to the group. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.activationRules">ActivationRules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules">GroupRoleManagementPolicyActivationRules</a></code> | activation_rules block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.activeAssignmentRules">ActiveAssignmentRules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules">GroupRoleManagementPolicyActiveAssignmentRules</a></code> | active_assignment_rules block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.eligibleAssignmentRules">EligibleAssignmentRules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules">GroupRoleManagementPolicyEligibleAssignmentRules</a></code> | eligible_assignment_rules block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#id GroupRoleManagementPolicy#id}. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.notificationRules">NotificationRules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules">GroupRoleManagementPolicyNotificationRules</a></code> | notification_rules block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts">GroupRoleManagementPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

ID of the group to which this policy is assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#group_id GroupRoleManagementPolicy#group_id}

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.roleId"></a>

```go
RoleId *string
```

- *Type:* *string

The ID of the role of this policy to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#role_id GroupRoleManagementPolicy#role_id}

---

##### `ActivationRules`<sup>Optional</sup> <a name="ActivationRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.activationRules"></a>

```go
ActivationRules GroupRoleManagementPolicyActivationRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules">GroupRoleManagementPolicyActivationRules</a>

activation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#activation_rules GroupRoleManagementPolicy#activation_rules}

---

##### `ActiveAssignmentRules`<sup>Optional</sup> <a name="ActiveAssignmentRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.activeAssignmentRules"></a>

```go
ActiveAssignmentRules GroupRoleManagementPolicyActiveAssignmentRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules">GroupRoleManagementPolicyActiveAssignmentRules</a>

active_assignment_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#active_assignment_rules GroupRoleManagementPolicy#active_assignment_rules}

---

##### `EligibleAssignmentRules`<sup>Optional</sup> <a name="EligibleAssignmentRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.eligibleAssignmentRules"></a>

```go
EligibleAssignmentRules GroupRoleManagementPolicyEligibleAssignmentRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules">GroupRoleManagementPolicyEligibleAssignmentRules</a>

eligible_assignment_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#eligible_assignment_rules GroupRoleManagementPolicy#eligible_assignment_rules}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#id GroupRoleManagementPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotificationRules`<sup>Optional</sup> <a name="NotificationRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.notificationRules"></a>

```go
NotificationRules GroupRoleManagementPolicyNotificationRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules">GroupRoleManagementPolicyNotificationRules</a>

notification_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#notification_rules GroupRoleManagementPolicy#notification_rules}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.timeouts"></a>

```go
Timeouts GroupRoleManagementPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts">GroupRoleManagementPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#timeouts GroupRoleManagementPolicy#timeouts}

---

### GroupRoleManagementPolicyEligibleAssignmentRules <a name="GroupRoleManagementPolicyEligibleAssignmentRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

&grouprolemanagementpolicy.GroupRoleManagementPolicyEligibleAssignmentRules {
	ExpirationRequired: interface{},
	ExpireAfter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules.property.expirationRequired">ExpirationRequired</a></code> | <code>interface{}</code> | Must the assignment have an expiry date. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules.property.expireAfter">ExpireAfter</a></code> | <code>*string</code> | The duration after which assignments expire. |

---

##### `ExpirationRequired`<sup>Optional</sup> <a name="ExpirationRequired" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules.property.expirationRequired"></a>

```go
ExpirationRequired interface{}
```

- *Type:* interface{}

Must the assignment have an expiry date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#expiration_required GroupRoleManagementPolicy#expiration_required}

---

##### `ExpireAfter`<sup>Optional</sup> <a name="ExpireAfter" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules.property.expireAfter"></a>

```go
ExpireAfter *string
```

- *Type:* *string

The duration after which assignments expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#expire_after GroupRoleManagementPolicy#expire_after}

---

### GroupRoleManagementPolicyNotificationRules <a name="GroupRoleManagementPolicyNotificationRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

&grouprolemanagementpolicy.GroupRoleManagementPolicyNotificationRules {
	ActiveAssignments: github.com/cdktf/cdktf-provider-azuread-go/azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments,
	EligibleActivations: github.com/cdktf/cdktf-provider-azuread-go/azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations,
	EligibleAssignments: github.com/cdktf/cdktf-provider-azuread-go/azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules.property.activeAssignments">ActiveAssignments</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments">GroupRoleManagementPolicyNotificationRulesActiveAssignments</a></code> | active_assignments block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules.property.eligibleActivations">EligibleActivations</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations">GroupRoleManagementPolicyNotificationRulesEligibleActivations</a></code> | eligible_activations block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules.property.eligibleAssignments">EligibleAssignments</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments">GroupRoleManagementPolicyNotificationRulesEligibleAssignments</a></code> | eligible_assignments block. |

---

##### `ActiveAssignments`<sup>Optional</sup> <a name="ActiveAssignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules.property.activeAssignments"></a>

```go
ActiveAssignments GroupRoleManagementPolicyNotificationRulesActiveAssignments
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments">GroupRoleManagementPolicyNotificationRulesActiveAssignments</a>

active_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#active_assignments GroupRoleManagementPolicy#active_assignments}

---

##### `EligibleActivations`<sup>Optional</sup> <a name="EligibleActivations" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules.property.eligibleActivations"></a>

```go
EligibleActivations GroupRoleManagementPolicyNotificationRulesEligibleActivations
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations">GroupRoleManagementPolicyNotificationRulesEligibleActivations</a>

eligible_activations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#eligible_activations GroupRoleManagementPolicy#eligible_activations}

---

##### `EligibleAssignments`<sup>Optional</sup> <a name="EligibleAssignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules.property.eligibleAssignments"></a>

```go
EligibleAssignments GroupRoleManagementPolicyNotificationRulesEligibleAssignments
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments">GroupRoleManagementPolicyNotificationRulesEligibleAssignments</a>

eligible_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#eligible_assignments GroupRoleManagementPolicy#eligible_assignments}

---

### GroupRoleManagementPolicyNotificationRulesActiveAssignments <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

&grouprolemanagementpolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments {
	AdminNotifications: github.com/cdktf/cdktf-provider-azuread-go/azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications,
	ApproverNotifications: github.com/cdktf/cdktf-provider-azuread-go/azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications,
	AssigneeNotifications: github.com/cdktf/cdktf-provider-azuread-go/azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments.property.adminNotifications">AdminNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a></code> | admin_notifications block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments.property.approverNotifications">ApproverNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a></code> | approver_notifications block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments.property.assigneeNotifications">AssigneeNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a></code> | assignee_notifications block. |

---

##### `AdminNotifications`<sup>Optional</sup> <a name="AdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments.property.adminNotifications"></a>

```go
AdminNotifications GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#admin_notifications GroupRoleManagementPolicy#admin_notifications}

---

##### `ApproverNotifications`<sup>Optional</sup> <a name="ApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments.property.approverNotifications"></a>

```go
ApproverNotifications GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#approver_notifications GroupRoleManagementPolicy#approver_notifications}

---

##### `AssigneeNotifications`<sup>Optional</sup> <a name="AssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments.property.assigneeNotifications"></a>

```go
AssigneeNotifications GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a>

assignee_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#assignee_notifications GroupRoleManagementPolicy#assignee_notifications}

---

### GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

&grouprolemanagementpolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications {
	DefaultRecipients: interface{},
	NotificationLevel: *string,
	AdditionalRecipients: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.defaultRecipients">DefaultRecipients</a></code> | <code>interface{}</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.notificationLevel">NotificationLevel</a></code> | <code>*string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.additionalRecipients">AdditionalRecipients</a></code> | <code>*[]*string</code> | The additional recipients to notify. |

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.defaultRecipients"></a>

```go
DefaultRecipients interface{}
```

- *Type:* interface{}

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.notificationLevel"></a>

```go
NotificationLevel *string
```

- *Type:* *string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `AdditionalRecipients`<sup>Optional</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.additionalRecipients"></a>

```go
AdditionalRecipients *[]*string
```

- *Type:* *[]*string

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

&grouprolemanagementpolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications {
	DefaultRecipients: interface{},
	NotificationLevel: *string,
	AdditionalRecipients: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.defaultRecipients">DefaultRecipients</a></code> | <code>interface{}</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.notificationLevel">NotificationLevel</a></code> | <code>*string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.additionalRecipients">AdditionalRecipients</a></code> | <code>*[]*string</code> | The additional recipients to notify. |

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.defaultRecipients"></a>

```go
DefaultRecipients interface{}
```

- *Type:* interface{}

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.notificationLevel"></a>

```go
NotificationLevel *string
```

- *Type:* *string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `AdditionalRecipients`<sup>Optional</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.additionalRecipients"></a>

```go
AdditionalRecipients *[]*string
```

- *Type:* *[]*string

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

&grouprolemanagementpolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications {
	DefaultRecipients: interface{},
	NotificationLevel: *string,
	AdditionalRecipients: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.defaultRecipients">DefaultRecipients</a></code> | <code>interface{}</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.notificationLevel">NotificationLevel</a></code> | <code>*string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.additionalRecipients">AdditionalRecipients</a></code> | <code>*[]*string</code> | The additional recipients to notify. |

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.defaultRecipients"></a>

```go
DefaultRecipients interface{}
```

- *Type:* interface{}

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.notificationLevel"></a>

```go
NotificationLevel *string
```

- *Type:* *string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `AdditionalRecipients`<sup>Optional</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.additionalRecipients"></a>

```go
AdditionalRecipients *[]*string
```

- *Type:* *[]*string

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesEligibleActivations <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivations" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

&grouprolemanagementpolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations {
	AdminNotifications: github.com/cdktf/cdktf-provider-azuread-go/azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications,
	ApproverNotifications: github.com/cdktf/cdktf-provider-azuread-go/azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications,
	AssigneeNotifications: github.com/cdktf/cdktf-provider-azuread-go/azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations.property.adminNotifications">AdminNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a></code> | admin_notifications block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations.property.approverNotifications">ApproverNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a></code> | approver_notifications block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations.property.assigneeNotifications">AssigneeNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a></code> | assignee_notifications block. |

---

##### `AdminNotifications`<sup>Optional</sup> <a name="AdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations.property.adminNotifications"></a>

```go
AdminNotifications GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#admin_notifications GroupRoleManagementPolicy#admin_notifications}

---

##### `ApproverNotifications`<sup>Optional</sup> <a name="ApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations.property.approverNotifications"></a>

```go
ApproverNotifications GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#approver_notifications GroupRoleManagementPolicy#approver_notifications}

---

##### `AssigneeNotifications`<sup>Optional</sup> <a name="AssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations.property.assigneeNotifications"></a>

```go
AssigneeNotifications GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a>

assignee_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#assignee_notifications GroupRoleManagementPolicy#assignee_notifications}

---

### GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

&grouprolemanagementpolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications {
	DefaultRecipients: interface{},
	NotificationLevel: *string,
	AdditionalRecipients: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.defaultRecipients">DefaultRecipients</a></code> | <code>interface{}</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.notificationLevel">NotificationLevel</a></code> | <code>*string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.additionalRecipients">AdditionalRecipients</a></code> | <code>*[]*string</code> | The additional recipients to notify. |

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.defaultRecipients"></a>

```go
DefaultRecipients interface{}
```

- *Type:* interface{}

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.notificationLevel"></a>

```go
NotificationLevel *string
```

- *Type:* *string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `AdditionalRecipients`<sup>Optional</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.additionalRecipients"></a>

```go
AdditionalRecipients *[]*string
```

- *Type:* *[]*string

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

&grouprolemanagementpolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications {
	DefaultRecipients: interface{},
	NotificationLevel: *string,
	AdditionalRecipients: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.defaultRecipients">DefaultRecipients</a></code> | <code>interface{}</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.notificationLevel">NotificationLevel</a></code> | <code>*string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.additionalRecipients">AdditionalRecipients</a></code> | <code>*[]*string</code> | The additional recipients to notify. |

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.defaultRecipients"></a>

```go
DefaultRecipients interface{}
```

- *Type:* interface{}

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.notificationLevel"></a>

```go
NotificationLevel *string
```

- *Type:* *string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `AdditionalRecipients`<sup>Optional</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.additionalRecipients"></a>

```go
AdditionalRecipients *[]*string
```

- *Type:* *[]*string

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

&grouprolemanagementpolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications {
	DefaultRecipients: interface{},
	NotificationLevel: *string,
	AdditionalRecipients: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.defaultRecipients">DefaultRecipients</a></code> | <code>interface{}</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.notificationLevel">NotificationLevel</a></code> | <code>*string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.additionalRecipients">AdditionalRecipients</a></code> | <code>*[]*string</code> | The additional recipients to notify. |

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.defaultRecipients"></a>

```go
DefaultRecipients interface{}
```

- *Type:* interface{}

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.notificationLevel"></a>

```go
NotificationLevel *string
```

- *Type:* *string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `AdditionalRecipients`<sup>Optional</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.additionalRecipients"></a>

```go
AdditionalRecipients *[]*string
```

- *Type:* *[]*string

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesEligibleAssignments <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

&grouprolemanagementpolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments {
	AdminNotifications: github.com/cdktf/cdktf-provider-azuread-go/azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications,
	ApproverNotifications: github.com/cdktf/cdktf-provider-azuread-go/azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications,
	AssigneeNotifications: github.com/cdktf/cdktf-provider-azuread-go/azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments.property.adminNotifications">AdminNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a></code> | admin_notifications block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments.property.approverNotifications">ApproverNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a></code> | approver_notifications block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments.property.assigneeNotifications">AssigneeNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a></code> | assignee_notifications block. |

---

##### `AdminNotifications`<sup>Optional</sup> <a name="AdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments.property.adminNotifications"></a>

```go
AdminNotifications GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#admin_notifications GroupRoleManagementPolicy#admin_notifications}

---

##### `ApproverNotifications`<sup>Optional</sup> <a name="ApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments.property.approverNotifications"></a>

```go
ApproverNotifications GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#approver_notifications GroupRoleManagementPolicy#approver_notifications}

---

##### `AssigneeNotifications`<sup>Optional</sup> <a name="AssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments.property.assigneeNotifications"></a>

```go
AssigneeNotifications GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a>

assignee_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#assignee_notifications GroupRoleManagementPolicy#assignee_notifications}

---

### GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

&grouprolemanagementpolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications {
	DefaultRecipients: interface{},
	NotificationLevel: *string,
	AdditionalRecipients: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.defaultRecipients">DefaultRecipients</a></code> | <code>interface{}</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.notificationLevel">NotificationLevel</a></code> | <code>*string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.additionalRecipients">AdditionalRecipients</a></code> | <code>*[]*string</code> | The additional recipients to notify. |

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.defaultRecipients"></a>

```go
DefaultRecipients interface{}
```

- *Type:* interface{}

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.notificationLevel"></a>

```go
NotificationLevel *string
```

- *Type:* *string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `AdditionalRecipients`<sup>Optional</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.additionalRecipients"></a>

```go
AdditionalRecipients *[]*string
```

- *Type:* *[]*string

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

&grouprolemanagementpolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications {
	DefaultRecipients: interface{},
	NotificationLevel: *string,
	AdditionalRecipients: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.defaultRecipients">DefaultRecipients</a></code> | <code>interface{}</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.notificationLevel">NotificationLevel</a></code> | <code>*string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.additionalRecipients">AdditionalRecipients</a></code> | <code>*[]*string</code> | The additional recipients to notify. |

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.defaultRecipients"></a>

```go
DefaultRecipients interface{}
```

- *Type:* interface{}

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.notificationLevel"></a>

```go
NotificationLevel *string
```

- *Type:* *string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `AdditionalRecipients`<sup>Optional</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.additionalRecipients"></a>

```go
AdditionalRecipients *[]*string
```

- *Type:* *[]*string

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

&grouprolemanagementpolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications {
	DefaultRecipients: interface{},
	NotificationLevel: *string,
	AdditionalRecipients: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.defaultRecipients">DefaultRecipients</a></code> | <code>interface{}</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.notificationLevel">NotificationLevel</a></code> | <code>*string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.additionalRecipients">AdditionalRecipients</a></code> | <code>*[]*string</code> | The additional recipients to notify. |

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.defaultRecipients"></a>

```go
DefaultRecipients interface{}
```

- *Type:* interface{}

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.notificationLevel"></a>

```go
NotificationLevel *string
```

- *Type:* *string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `AdditionalRecipients`<sup>Optional</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.additionalRecipients"></a>

```go
AdditionalRecipients *[]*string
```

- *Type:* *[]*string

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyTimeouts <a name="GroupRoleManagementPolicyTimeouts" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

&grouprolemanagementpolicy.GroupRoleManagementPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#create GroupRoleManagementPolicy#create}. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#delete GroupRoleManagementPolicy#delete}. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#read GroupRoleManagementPolicy#read}. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#update GroupRoleManagementPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#create GroupRoleManagementPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#delete GroupRoleManagementPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#read GroupRoleManagementPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/group_role_management_policy#update GroupRoleManagementPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference <a name="GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.NewGroupRoleManagementPolicyActivationRulesApprovalStageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.putPrimaryApprover">PutPrimaryApprover</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrimaryApprover` <a name="PutPrimaryApprover" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.putPrimaryApprover"></a>

```go
func PutPrimaryApprover(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.putPrimaryApprover.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.primaryApprover">PrimaryApprover</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.primaryApproverInput">PrimaryApproverInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage">GroupRoleManagementPolicyActivationRulesApprovalStage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimaryApprover`<sup>Required</sup> <a name="PrimaryApprover" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.primaryApprover"></a>

```go
func PrimaryApprover() GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList</a>

---

##### `PrimaryApproverInput`<sup>Optional</sup> <a name="PrimaryApproverInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.primaryApproverInput"></a>

```go
func PrimaryApproverInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.internalValue"></a>

```go
func InternalValue() GroupRoleManagementPolicyActivationRulesApprovalStage
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage">GroupRoleManagementPolicyActivationRulesApprovalStage</a>

---


### GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList <a name="GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.NewGroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.get"></a>

```go
func Get(index *f64) GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference <a name="GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.NewGroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroupRoleManagementPolicyActivationRulesOutputReference <a name="GroupRoleManagementPolicyActivationRulesOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.NewGroupRoleManagementPolicyActivationRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupRoleManagementPolicyActivationRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.putApprovalStage">PutApprovalStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetApprovalStage">ResetApprovalStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetMaximumDuration">ResetMaximumDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireApproval">ResetRequireApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequiredConditionalAccessAuthenticationContext">ResetRequiredConditionalAccessAuthenticationContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireJustification">ResetRequireJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireMultifactorAuthentication">ResetRequireMultifactorAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireTicketInfo">ResetRequireTicketInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApprovalStage` <a name="PutApprovalStage" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.putApprovalStage"></a>

```go
func PutApprovalStage(value GroupRoleManagementPolicyActivationRulesApprovalStage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.putApprovalStage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage">GroupRoleManagementPolicyActivationRulesApprovalStage</a>

---

##### `ResetApprovalStage` <a name="ResetApprovalStage" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetApprovalStage"></a>

```go
func ResetApprovalStage()
```

##### `ResetMaximumDuration` <a name="ResetMaximumDuration" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetMaximumDuration"></a>

```go
func ResetMaximumDuration()
```

##### `ResetRequireApproval` <a name="ResetRequireApproval" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireApproval"></a>

```go
func ResetRequireApproval()
```

##### `ResetRequiredConditionalAccessAuthenticationContext` <a name="ResetRequiredConditionalAccessAuthenticationContext" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequiredConditionalAccessAuthenticationContext"></a>

```go
func ResetRequiredConditionalAccessAuthenticationContext()
```

##### `ResetRequireJustification` <a name="ResetRequireJustification" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireJustification"></a>

```go
func ResetRequireJustification()
```

##### `ResetRequireMultifactorAuthentication` <a name="ResetRequireMultifactorAuthentication" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireMultifactorAuthentication"></a>

```go
func ResetRequireMultifactorAuthentication()
```

##### `ResetRequireTicketInfo` <a name="ResetRequireTicketInfo" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireTicketInfo"></a>

```go
func ResetRequireTicketInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.approvalStage">ApprovalStage</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference">GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.approvalStageInput">ApprovalStageInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage">GroupRoleManagementPolicyActivationRulesApprovalStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.maximumDurationInput">MaximumDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireApprovalInput">RequireApprovalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requiredConditionalAccessAuthenticationContextInput">RequiredConditionalAccessAuthenticationContextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireJustificationInput">RequireJustificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireMultifactorAuthenticationInput">RequireMultifactorAuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireTicketInfoInput">RequireTicketInfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.maximumDuration">MaximumDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireApproval">RequireApproval</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requiredConditionalAccessAuthenticationContext">RequiredConditionalAccessAuthenticationContext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireJustification">RequireJustification</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireMultifactorAuthentication">RequireMultifactorAuthentication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireTicketInfo">RequireTicketInfo</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules">GroupRoleManagementPolicyActivationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApprovalStage`<sup>Required</sup> <a name="ApprovalStage" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.approvalStage"></a>

```go
func ApprovalStage() GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference">GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference</a>

---

##### `ApprovalStageInput`<sup>Optional</sup> <a name="ApprovalStageInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.approvalStageInput"></a>

```go
func ApprovalStageInput() GroupRoleManagementPolicyActivationRulesApprovalStage
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage">GroupRoleManagementPolicyActivationRulesApprovalStage</a>

---

##### `MaximumDurationInput`<sup>Optional</sup> <a name="MaximumDurationInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.maximumDurationInput"></a>

```go
func MaximumDurationInput() *string
```

- *Type:* *string

---

##### `RequireApprovalInput`<sup>Optional</sup> <a name="RequireApprovalInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireApprovalInput"></a>

```go
func RequireApprovalInput() interface{}
```

- *Type:* interface{}

---

##### `RequiredConditionalAccessAuthenticationContextInput`<sup>Optional</sup> <a name="RequiredConditionalAccessAuthenticationContextInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requiredConditionalAccessAuthenticationContextInput"></a>

```go
func RequiredConditionalAccessAuthenticationContextInput() *string
```

- *Type:* *string

---

##### `RequireJustificationInput`<sup>Optional</sup> <a name="RequireJustificationInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireJustificationInput"></a>

```go
func RequireJustificationInput() interface{}
```

- *Type:* interface{}

---

##### `RequireMultifactorAuthenticationInput`<sup>Optional</sup> <a name="RequireMultifactorAuthenticationInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireMultifactorAuthenticationInput"></a>

```go
func RequireMultifactorAuthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `RequireTicketInfoInput`<sup>Optional</sup> <a name="RequireTicketInfoInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireTicketInfoInput"></a>

```go
func RequireTicketInfoInput() interface{}
```

- *Type:* interface{}

---

##### `MaximumDuration`<sup>Required</sup> <a name="MaximumDuration" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.maximumDuration"></a>

```go
func MaximumDuration() *string
```

- *Type:* *string

---

##### `RequireApproval`<sup>Required</sup> <a name="RequireApproval" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireApproval"></a>

```go
func RequireApproval() interface{}
```

- *Type:* interface{}

---

##### `RequiredConditionalAccessAuthenticationContext`<sup>Required</sup> <a name="RequiredConditionalAccessAuthenticationContext" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requiredConditionalAccessAuthenticationContext"></a>

```go
func RequiredConditionalAccessAuthenticationContext() *string
```

- *Type:* *string

---

##### `RequireJustification`<sup>Required</sup> <a name="RequireJustification" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireJustification"></a>

```go
func RequireJustification() interface{}
```

- *Type:* interface{}

---

##### `RequireMultifactorAuthentication`<sup>Required</sup> <a name="RequireMultifactorAuthentication" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireMultifactorAuthentication"></a>

```go
func RequireMultifactorAuthentication() interface{}
```

- *Type:* interface{}

---

##### `RequireTicketInfo`<sup>Required</sup> <a name="RequireTicketInfo" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireTicketInfo"></a>

```go
func RequireTicketInfo() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() GroupRoleManagementPolicyActivationRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules">GroupRoleManagementPolicyActivationRules</a>

---


### GroupRoleManagementPolicyActiveAssignmentRulesOutputReference <a name="GroupRoleManagementPolicyActiveAssignmentRulesOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.NewGroupRoleManagementPolicyActiveAssignmentRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupRoleManagementPolicyActiveAssignmentRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetExpirationRequired">ResetExpirationRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetExpireAfter">ResetExpireAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireJustification">ResetRequireJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireMultifactorAuthentication">ResetRequireMultifactorAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireTicketInfo">ResetRequireTicketInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpirationRequired` <a name="ResetExpirationRequired" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetExpirationRequired"></a>

```go
func ResetExpirationRequired()
```

##### `ResetExpireAfter` <a name="ResetExpireAfter" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetExpireAfter"></a>

```go
func ResetExpireAfter()
```

##### `ResetRequireJustification` <a name="ResetRequireJustification" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireJustification"></a>

```go
func ResetRequireJustification()
```

##### `ResetRequireMultifactorAuthentication` <a name="ResetRequireMultifactorAuthentication" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireMultifactorAuthentication"></a>

```go
func ResetRequireMultifactorAuthentication()
```

##### `ResetRequireTicketInfo` <a name="ResetRequireTicketInfo" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireTicketInfo"></a>

```go
func ResetRequireTicketInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expirationRequiredInput">ExpirationRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expireAfterInput">ExpireAfterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireJustificationInput">RequireJustificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireMultifactorAuthenticationInput">RequireMultifactorAuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireTicketInfoInput">RequireTicketInfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expirationRequired">ExpirationRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expireAfter">ExpireAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireJustification">RequireJustification</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireMultifactorAuthentication">RequireMultifactorAuthentication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireTicketInfo">RequireTicketInfo</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules">GroupRoleManagementPolicyActiveAssignmentRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpirationRequiredInput`<sup>Optional</sup> <a name="ExpirationRequiredInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expirationRequiredInput"></a>

```go
func ExpirationRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `ExpireAfterInput`<sup>Optional</sup> <a name="ExpireAfterInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expireAfterInput"></a>

```go
func ExpireAfterInput() *string
```

- *Type:* *string

---

##### `RequireJustificationInput`<sup>Optional</sup> <a name="RequireJustificationInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireJustificationInput"></a>

```go
func RequireJustificationInput() interface{}
```

- *Type:* interface{}

---

##### `RequireMultifactorAuthenticationInput`<sup>Optional</sup> <a name="RequireMultifactorAuthenticationInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireMultifactorAuthenticationInput"></a>

```go
func RequireMultifactorAuthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `RequireTicketInfoInput`<sup>Optional</sup> <a name="RequireTicketInfoInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireTicketInfoInput"></a>

```go
func RequireTicketInfoInput() interface{}
```

- *Type:* interface{}

---

##### `ExpirationRequired`<sup>Required</sup> <a name="ExpirationRequired" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expirationRequired"></a>

```go
func ExpirationRequired() interface{}
```

- *Type:* interface{}

---

##### `ExpireAfter`<sup>Required</sup> <a name="ExpireAfter" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expireAfter"></a>

```go
func ExpireAfter() *string
```

- *Type:* *string

---

##### `RequireJustification`<sup>Required</sup> <a name="RequireJustification" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireJustification"></a>

```go
func RequireJustification() interface{}
```

- *Type:* interface{}

---

##### `RequireMultifactorAuthentication`<sup>Required</sup> <a name="RequireMultifactorAuthentication" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireMultifactorAuthentication"></a>

```go
func RequireMultifactorAuthentication() interface{}
```

- *Type:* interface{}

---

##### `RequireTicketInfo`<sup>Required</sup> <a name="RequireTicketInfo" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireTicketInfo"></a>

```go
func RequireTicketInfo() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() GroupRoleManagementPolicyActiveAssignmentRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules">GroupRoleManagementPolicyActiveAssignmentRules</a>

---


### GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference <a name="GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.NewGroupRoleManagementPolicyEligibleAssignmentRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.resetExpirationRequired">ResetExpirationRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.resetExpireAfter">ResetExpireAfter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpirationRequired` <a name="ResetExpirationRequired" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.resetExpirationRequired"></a>

```go
func ResetExpirationRequired()
```

##### `ResetExpireAfter` <a name="ResetExpireAfter" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.resetExpireAfter"></a>

```go
func ResetExpireAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expirationRequiredInput">ExpirationRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expireAfterInput">ExpireAfterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expirationRequired">ExpirationRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expireAfter">ExpireAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules">GroupRoleManagementPolicyEligibleAssignmentRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpirationRequiredInput`<sup>Optional</sup> <a name="ExpirationRequiredInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expirationRequiredInput"></a>

```go
func ExpirationRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `ExpireAfterInput`<sup>Optional</sup> <a name="ExpireAfterInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expireAfterInput"></a>

```go
func ExpireAfterInput() *string
```

- *Type:* *string

---

##### `ExpirationRequired`<sup>Required</sup> <a name="ExpirationRequired" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expirationRequired"></a>

```go
func ExpirationRequired() interface{}
```

- *Type:* interface{}

---

##### `ExpireAfter`<sup>Required</sup> <a name="ExpireAfter" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expireAfter"></a>

```go
func ExpireAfter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() GroupRoleManagementPolicyEligibleAssignmentRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules">GroupRoleManagementPolicyEligibleAssignmentRules</a>

---


### GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.NewGroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resetAdditionalRecipients">ResetAdditionalRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalRecipients` <a name="ResetAdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resetAdditionalRecipients"></a>

```go
func ResetAdditionalRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.additionalRecipientsInput">AdditionalRecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.defaultRecipientsInput">DefaultRecipientsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.notificationLevelInput">NotificationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.additionalRecipients">AdditionalRecipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.defaultRecipients">DefaultRecipients</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.notificationLevel">NotificationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalRecipientsInput`<sup>Optional</sup> <a name="AdditionalRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.additionalRecipientsInput"></a>

```go
func AdditionalRecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRecipientsInput`<sup>Optional</sup> <a name="DefaultRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.defaultRecipientsInput"></a>

```go
func DefaultRecipientsInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationLevelInput`<sup>Optional</sup> <a name="NotificationLevelInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.notificationLevelInput"></a>

```go
func NotificationLevelInput() *string
```

- *Type:* *string

---

##### `AdditionalRecipients`<sup>Required</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.additionalRecipients"></a>

```go
func AdditionalRecipients() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.defaultRecipients"></a>

```go
func DefaultRecipients() interface{}
```

- *Type:* interface{}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.notificationLevel"></a>

```go
func NotificationLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.NewGroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resetAdditionalRecipients">ResetAdditionalRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalRecipients` <a name="ResetAdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resetAdditionalRecipients"></a>

```go
func ResetAdditionalRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.additionalRecipientsInput">AdditionalRecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.defaultRecipientsInput">DefaultRecipientsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.notificationLevelInput">NotificationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.additionalRecipients">AdditionalRecipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.defaultRecipients">DefaultRecipients</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.notificationLevel">NotificationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalRecipientsInput`<sup>Optional</sup> <a name="AdditionalRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.additionalRecipientsInput"></a>

```go
func AdditionalRecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRecipientsInput`<sup>Optional</sup> <a name="DefaultRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.defaultRecipientsInput"></a>

```go
func DefaultRecipientsInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationLevelInput`<sup>Optional</sup> <a name="NotificationLevelInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.notificationLevelInput"></a>

```go
func NotificationLevelInput() *string
```

- *Type:* *string

---

##### `AdditionalRecipients`<sup>Required</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.additionalRecipients"></a>

```go
func AdditionalRecipients() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.defaultRecipients"></a>

```go
func DefaultRecipients() interface{}
```

- *Type:* interface{}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.notificationLevel"></a>

```go
func NotificationLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.NewGroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resetAdditionalRecipients">ResetAdditionalRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalRecipients` <a name="ResetAdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resetAdditionalRecipients"></a>

```go
func ResetAdditionalRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipientsInput">AdditionalRecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipientsInput">DefaultRecipientsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.notificationLevelInput">NotificationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients">AdditionalRecipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients">DefaultRecipients</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel">NotificationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalRecipientsInput`<sup>Optional</sup> <a name="AdditionalRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipientsInput"></a>

```go
func AdditionalRecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRecipientsInput`<sup>Optional</sup> <a name="DefaultRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipientsInput"></a>

```go
func DefaultRecipientsInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationLevelInput`<sup>Optional</sup> <a name="NotificationLevelInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.notificationLevelInput"></a>

```go
func NotificationLevelInput() *string
```

- *Type:* *string

---

##### `AdditionalRecipients`<sup>Required</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients"></a>

```go
func AdditionalRecipients() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients"></a>

```go
func DefaultRecipients() interface{}
```

- *Type:* interface{}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel"></a>

```go
func NotificationLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.NewGroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAdminNotifications">PutAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putApproverNotifications">PutApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAssigneeNotifications">PutAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetAdminNotifications">ResetAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetApproverNotifications">ResetApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetAssigneeNotifications">ResetAssigneeNotifications</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminNotifications` <a name="PutAdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAdminNotifications"></a>

```go
func PutAdminNotifications(value GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAdminNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a>

---

##### `PutApproverNotifications` <a name="PutApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putApproverNotifications"></a>

```go
func PutApproverNotifications(value GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putApproverNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a>

---

##### `PutAssigneeNotifications` <a name="PutAssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAssigneeNotifications"></a>

```go
func PutAssigneeNotifications(value GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAssigneeNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a>

---

##### `ResetAdminNotifications` <a name="ResetAdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetAdminNotifications"></a>

```go
func ResetAdminNotifications()
```

##### `ResetApproverNotifications` <a name="ResetApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetApproverNotifications"></a>

```go
func ResetApproverNotifications()
```

##### `ResetAssigneeNotifications` <a name="ResetAssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetAssigneeNotifications"></a>

```go
func ResetAssigneeNotifications()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.adminNotifications">AdminNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.approverNotifications">ApproverNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.assigneeNotifications">AssigneeNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.adminNotificationsInput">AdminNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.approverNotificationsInput">ApproverNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.assigneeNotificationsInput">AssigneeNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments">GroupRoleManagementPolicyNotificationRulesActiveAssignments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminNotifications`<sup>Required</sup> <a name="AdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.adminNotifications"></a>

```go
func AdminNotifications() GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference</a>

---

##### `ApproverNotifications`<sup>Required</sup> <a name="ApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.approverNotifications"></a>

```go
func ApproverNotifications() GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference</a>

---

##### `AssigneeNotifications`<sup>Required</sup> <a name="AssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.assigneeNotifications"></a>

```go
func AssigneeNotifications() GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference</a>

---

##### `AdminNotificationsInput`<sup>Optional</sup> <a name="AdminNotificationsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.adminNotificationsInput"></a>

```go
func AdminNotificationsInput() GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a>

---

##### `ApproverNotificationsInput`<sup>Optional</sup> <a name="ApproverNotificationsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.approverNotificationsInput"></a>

```go
func ApproverNotificationsInput() GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a>

---

##### `AssigneeNotificationsInput`<sup>Optional</sup> <a name="AssigneeNotificationsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.assigneeNotificationsInput"></a>

```go
func AssigneeNotificationsInput() GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() GroupRoleManagementPolicyNotificationRulesActiveAssignments
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments">GroupRoleManagementPolicyNotificationRulesActiveAssignments</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.NewGroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resetAdditionalRecipients">ResetAdditionalRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalRecipients` <a name="ResetAdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resetAdditionalRecipients"></a>

```go
func ResetAdditionalRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.additionalRecipientsInput">AdditionalRecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.defaultRecipientsInput">DefaultRecipientsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.notificationLevelInput">NotificationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.additionalRecipients">AdditionalRecipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.defaultRecipients">DefaultRecipients</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.notificationLevel">NotificationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalRecipientsInput`<sup>Optional</sup> <a name="AdditionalRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.additionalRecipientsInput"></a>

```go
func AdditionalRecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRecipientsInput`<sup>Optional</sup> <a name="DefaultRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.defaultRecipientsInput"></a>

```go
func DefaultRecipientsInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationLevelInput`<sup>Optional</sup> <a name="NotificationLevelInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.notificationLevelInput"></a>

```go
func NotificationLevelInput() *string
```

- *Type:* *string

---

##### `AdditionalRecipients`<sup>Required</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.additionalRecipients"></a>

```go
func AdditionalRecipients() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.defaultRecipients"></a>

```go
func DefaultRecipients() interface{}
```

- *Type:* interface{}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.notificationLevel"></a>

```go
func NotificationLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.NewGroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resetAdditionalRecipients">ResetAdditionalRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalRecipients` <a name="ResetAdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resetAdditionalRecipients"></a>

```go
func ResetAdditionalRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.additionalRecipientsInput">AdditionalRecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.defaultRecipientsInput">DefaultRecipientsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.notificationLevelInput">NotificationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.additionalRecipients">AdditionalRecipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.defaultRecipients">DefaultRecipients</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.notificationLevel">NotificationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalRecipientsInput`<sup>Optional</sup> <a name="AdditionalRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.additionalRecipientsInput"></a>

```go
func AdditionalRecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRecipientsInput`<sup>Optional</sup> <a name="DefaultRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.defaultRecipientsInput"></a>

```go
func DefaultRecipientsInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationLevelInput`<sup>Optional</sup> <a name="NotificationLevelInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.notificationLevelInput"></a>

```go
func NotificationLevelInput() *string
```

- *Type:* *string

---

##### `AdditionalRecipients`<sup>Required</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.additionalRecipients"></a>

```go
func AdditionalRecipients() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.defaultRecipients"></a>

```go
func DefaultRecipients() interface{}
```

- *Type:* interface{}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.notificationLevel"></a>

```go
func NotificationLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.NewGroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resetAdditionalRecipients">ResetAdditionalRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalRecipients` <a name="ResetAdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resetAdditionalRecipients"></a>

```go
func ResetAdditionalRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.additionalRecipientsInput">AdditionalRecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.defaultRecipientsInput">DefaultRecipientsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.notificationLevelInput">NotificationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.additionalRecipients">AdditionalRecipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.defaultRecipients">DefaultRecipients</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.notificationLevel">NotificationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalRecipientsInput`<sup>Optional</sup> <a name="AdditionalRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.additionalRecipientsInput"></a>

```go
func AdditionalRecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRecipientsInput`<sup>Optional</sup> <a name="DefaultRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.defaultRecipientsInput"></a>

```go
func DefaultRecipientsInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationLevelInput`<sup>Optional</sup> <a name="NotificationLevelInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.notificationLevelInput"></a>

```go
func NotificationLevelInput() *string
```

- *Type:* *string

---

##### `AdditionalRecipients`<sup>Required</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.additionalRecipients"></a>

```go
func AdditionalRecipients() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.defaultRecipients"></a>

```go
func DefaultRecipients() interface{}
```

- *Type:* interface{}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.notificationLevel"></a>

```go
func NotificationLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.NewGroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAdminNotifications">PutAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putApproverNotifications">PutApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAssigneeNotifications">PutAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetAdminNotifications">ResetAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetApproverNotifications">ResetApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetAssigneeNotifications">ResetAssigneeNotifications</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminNotifications` <a name="PutAdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAdminNotifications"></a>

```go
func PutAdminNotifications(value GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAdminNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a>

---

##### `PutApproverNotifications` <a name="PutApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putApproverNotifications"></a>

```go
func PutApproverNotifications(value GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putApproverNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a>

---

##### `PutAssigneeNotifications` <a name="PutAssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAssigneeNotifications"></a>

```go
func PutAssigneeNotifications(value GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAssigneeNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a>

---

##### `ResetAdminNotifications` <a name="ResetAdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetAdminNotifications"></a>

```go
func ResetAdminNotifications()
```

##### `ResetApproverNotifications` <a name="ResetApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetApproverNotifications"></a>

```go
func ResetApproverNotifications()
```

##### `ResetAssigneeNotifications` <a name="ResetAssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetAssigneeNotifications"></a>

```go
func ResetAssigneeNotifications()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.adminNotifications">AdminNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.approverNotifications">ApproverNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.assigneeNotifications">AssigneeNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.adminNotificationsInput">AdminNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.approverNotificationsInput">ApproverNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.assigneeNotificationsInput">AssigneeNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations">GroupRoleManagementPolicyNotificationRulesEligibleActivations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminNotifications`<sup>Required</sup> <a name="AdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.adminNotifications"></a>

```go
func AdminNotifications() GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference</a>

---

##### `ApproverNotifications`<sup>Required</sup> <a name="ApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.approverNotifications"></a>

```go
func ApproverNotifications() GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference</a>

---

##### `AssigneeNotifications`<sup>Required</sup> <a name="AssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.assigneeNotifications"></a>

```go
func AssigneeNotifications() GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference</a>

---

##### `AdminNotificationsInput`<sup>Optional</sup> <a name="AdminNotificationsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.adminNotificationsInput"></a>

```go
func AdminNotificationsInput() GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a>

---

##### `ApproverNotificationsInput`<sup>Optional</sup> <a name="ApproverNotificationsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.approverNotificationsInput"></a>

```go
func ApproverNotificationsInput() GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a>

---

##### `AssigneeNotificationsInput`<sup>Optional</sup> <a name="AssigneeNotificationsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.assigneeNotificationsInput"></a>

```go
func AssigneeNotificationsInput() GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.internalValue"></a>

```go
func InternalValue() GroupRoleManagementPolicyNotificationRulesEligibleActivations
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations">GroupRoleManagementPolicyNotificationRulesEligibleActivations</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.NewGroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resetAdditionalRecipients">ResetAdditionalRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalRecipients` <a name="ResetAdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resetAdditionalRecipients"></a>

```go
func ResetAdditionalRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.additionalRecipientsInput">AdditionalRecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.defaultRecipientsInput">DefaultRecipientsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.notificationLevelInput">NotificationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.additionalRecipients">AdditionalRecipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.defaultRecipients">DefaultRecipients</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.notificationLevel">NotificationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalRecipientsInput`<sup>Optional</sup> <a name="AdditionalRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.additionalRecipientsInput"></a>

```go
func AdditionalRecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRecipientsInput`<sup>Optional</sup> <a name="DefaultRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.defaultRecipientsInput"></a>

```go
func DefaultRecipientsInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationLevelInput`<sup>Optional</sup> <a name="NotificationLevelInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.notificationLevelInput"></a>

```go
func NotificationLevelInput() *string
```

- *Type:* *string

---

##### `AdditionalRecipients`<sup>Required</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.additionalRecipients"></a>

```go
func AdditionalRecipients() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.defaultRecipients"></a>

```go
func DefaultRecipients() interface{}
```

- *Type:* interface{}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.notificationLevel"></a>

```go
func NotificationLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.NewGroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resetAdditionalRecipients">ResetAdditionalRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalRecipients` <a name="ResetAdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resetAdditionalRecipients"></a>

```go
func ResetAdditionalRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.additionalRecipientsInput">AdditionalRecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.defaultRecipientsInput">DefaultRecipientsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.notificationLevelInput">NotificationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.additionalRecipients">AdditionalRecipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.defaultRecipients">DefaultRecipients</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.notificationLevel">NotificationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalRecipientsInput`<sup>Optional</sup> <a name="AdditionalRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.additionalRecipientsInput"></a>

```go
func AdditionalRecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRecipientsInput`<sup>Optional</sup> <a name="DefaultRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.defaultRecipientsInput"></a>

```go
func DefaultRecipientsInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationLevelInput`<sup>Optional</sup> <a name="NotificationLevelInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.notificationLevelInput"></a>

```go
func NotificationLevelInput() *string
```

- *Type:* *string

---

##### `AdditionalRecipients`<sup>Required</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.additionalRecipients"></a>

```go
func AdditionalRecipients() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.defaultRecipients"></a>

```go
func DefaultRecipients() interface{}
```

- *Type:* interface{}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.notificationLevel"></a>

```go
func NotificationLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.NewGroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resetAdditionalRecipients">ResetAdditionalRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalRecipients` <a name="ResetAdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resetAdditionalRecipients"></a>

```go
func ResetAdditionalRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipientsInput">AdditionalRecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipientsInput">DefaultRecipientsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.notificationLevelInput">NotificationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients">AdditionalRecipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients">DefaultRecipients</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel">NotificationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalRecipientsInput`<sup>Optional</sup> <a name="AdditionalRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipientsInput"></a>

```go
func AdditionalRecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRecipientsInput`<sup>Optional</sup> <a name="DefaultRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipientsInput"></a>

```go
func DefaultRecipientsInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationLevelInput`<sup>Optional</sup> <a name="NotificationLevelInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.notificationLevelInput"></a>

```go
func NotificationLevelInput() *string
```

- *Type:* *string

---

##### `AdditionalRecipients`<sup>Required</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients"></a>

```go
func AdditionalRecipients() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRecipients`<sup>Required</sup> <a name="DefaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients"></a>

```go
func DefaultRecipients() interface{}
```

- *Type:* interface{}

---

##### `NotificationLevel`<sup>Required</sup> <a name="NotificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel"></a>

```go
func NotificationLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.NewGroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAdminNotifications">PutAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putApproverNotifications">PutApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAssigneeNotifications">PutAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetAdminNotifications">ResetAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetApproverNotifications">ResetApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetAssigneeNotifications">ResetAssigneeNotifications</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminNotifications` <a name="PutAdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAdminNotifications"></a>

```go
func PutAdminNotifications(value GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAdminNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a>

---

##### `PutApproverNotifications` <a name="PutApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putApproverNotifications"></a>

```go
func PutApproverNotifications(value GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putApproverNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a>

---

##### `PutAssigneeNotifications` <a name="PutAssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAssigneeNotifications"></a>

```go
func PutAssigneeNotifications(value GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAssigneeNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a>

---

##### `ResetAdminNotifications` <a name="ResetAdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetAdminNotifications"></a>

```go
func ResetAdminNotifications()
```

##### `ResetApproverNotifications` <a name="ResetApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetApproverNotifications"></a>

```go
func ResetApproverNotifications()
```

##### `ResetAssigneeNotifications` <a name="ResetAssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetAssigneeNotifications"></a>

```go
func ResetAssigneeNotifications()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.adminNotifications">AdminNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.approverNotifications">ApproverNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.assigneeNotifications">AssigneeNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.adminNotificationsInput">AdminNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.approverNotificationsInput">ApproverNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.assigneeNotificationsInput">AssigneeNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments">GroupRoleManagementPolicyNotificationRulesEligibleAssignments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminNotifications`<sup>Required</sup> <a name="AdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.adminNotifications"></a>

```go
func AdminNotifications() GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference</a>

---

##### `ApproverNotifications`<sup>Required</sup> <a name="ApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.approverNotifications"></a>

```go
func ApproverNotifications() GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference</a>

---

##### `AssigneeNotifications`<sup>Required</sup> <a name="AssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.assigneeNotifications"></a>

```go
func AssigneeNotifications() GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference</a>

---

##### `AdminNotificationsInput`<sup>Optional</sup> <a name="AdminNotificationsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.adminNotificationsInput"></a>

```go
func AdminNotificationsInput() GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a>

---

##### `ApproverNotificationsInput`<sup>Optional</sup> <a name="ApproverNotificationsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.approverNotificationsInput"></a>

```go
func ApproverNotificationsInput() GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a>

---

##### `AssigneeNotificationsInput`<sup>Optional</sup> <a name="AssigneeNotificationsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.assigneeNotificationsInput"></a>

```go
func AssigneeNotificationsInput() GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() GroupRoleManagementPolicyNotificationRulesEligibleAssignments
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments">GroupRoleManagementPolicyNotificationRulesEligibleAssignments</a>

---


### GroupRoleManagementPolicyNotificationRulesOutputReference <a name="GroupRoleManagementPolicyNotificationRulesOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.NewGroupRoleManagementPolicyNotificationRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupRoleManagementPolicyNotificationRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putActiveAssignments">PutActiveAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putEligibleActivations">PutEligibleActivations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putEligibleAssignments">PutEligibleAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resetActiveAssignments">ResetActiveAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resetEligibleActivations">ResetEligibleActivations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resetEligibleAssignments">ResetEligibleAssignments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActiveAssignments` <a name="PutActiveAssignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putActiveAssignments"></a>

```go
func PutActiveAssignments(value GroupRoleManagementPolicyNotificationRulesActiveAssignments)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putActiveAssignments.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments">GroupRoleManagementPolicyNotificationRulesActiveAssignments</a>

---

##### `PutEligibleActivations` <a name="PutEligibleActivations" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putEligibleActivations"></a>

```go
func PutEligibleActivations(value GroupRoleManagementPolicyNotificationRulesEligibleActivations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putEligibleActivations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations">GroupRoleManagementPolicyNotificationRulesEligibleActivations</a>

---

##### `PutEligibleAssignments` <a name="PutEligibleAssignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putEligibleAssignments"></a>

```go
func PutEligibleAssignments(value GroupRoleManagementPolicyNotificationRulesEligibleAssignments)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putEligibleAssignments.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments">GroupRoleManagementPolicyNotificationRulesEligibleAssignments</a>

---

##### `ResetActiveAssignments` <a name="ResetActiveAssignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resetActiveAssignments"></a>

```go
func ResetActiveAssignments()
```

##### `ResetEligibleActivations` <a name="ResetEligibleActivations" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resetEligibleActivations"></a>

```go
func ResetEligibleActivations()
```

##### `ResetEligibleAssignments` <a name="ResetEligibleAssignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resetEligibleAssignments"></a>

```go
func ResetEligibleAssignments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.activeAssignments">ActiveAssignments</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleActivations">EligibleActivations</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleAssignments">EligibleAssignments</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.activeAssignmentsInput">ActiveAssignmentsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments">GroupRoleManagementPolicyNotificationRulesActiveAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleActivationsInput">EligibleActivationsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations">GroupRoleManagementPolicyNotificationRulesEligibleActivations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleAssignmentsInput">EligibleAssignmentsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments">GroupRoleManagementPolicyNotificationRulesEligibleAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules">GroupRoleManagementPolicyNotificationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveAssignments`<sup>Required</sup> <a name="ActiveAssignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.activeAssignments"></a>

```go
func ActiveAssignments() GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference</a>

---

##### `EligibleActivations`<sup>Required</sup> <a name="EligibleActivations" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleActivations"></a>

```go
func EligibleActivations() GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference</a>

---

##### `EligibleAssignments`<sup>Required</sup> <a name="EligibleAssignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleAssignments"></a>

```go
func EligibleAssignments() GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference</a>

---

##### `ActiveAssignmentsInput`<sup>Optional</sup> <a name="ActiveAssignmentsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.activeAssignmentsInput"></a>

```go
func ActiveAssignmentsInput() GroupRoleManagementPolicyNotificationRulesActiveAssignments
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments">GroupRoleManagementPolicyNotificationRulesActiveAssignments</a>

---

##### `EligibleActivationsInput`<sup>Optional</sup> <a name="EligibleActivationsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleActivationsInput"></a>

```go
func EligibleActivationsInput() GroupRoleManagementPolicyNotificationRulesEligibleActivations
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations">GroupRoleManagementPolicyNotificationRulesEligibleActivations</a>

---

##### `EligibleAssignmentsInput`<sup>Optional</sup> <a name="EligibleAssignmentsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleAssignmentsInput"></a>

```go
func EligibleAssignmentsInput() GroupRoleManagementPolicyNotificationRulesEligibleAssignments
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments">GroupRoleManagementPolicyNotificationRulesEligibleAssignments</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() GroupRoleManagementPolicyNotificationRules
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules">GroupRoleManagementPolicyNotificationRules</a>

---


### GroupRoleManagementPolicyTimeoutsOutputReference <a name="GroupRoleManagementPolicyTimeoutsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/grouprolemanagementpolicy"

grouprolemanagementpolicy.NewGroupRoleManagementPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupRoleManagementPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



