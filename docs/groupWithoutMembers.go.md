# `groupWithoutMembers` Submodule <a name="`groupWithoutMembers` Submodule" id="@cdktf/provider-azuread.groupWithoutMembers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupWithoutMembers <a name="GroupWithoutMembers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members azuread_group_without_members}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/groupwithoutmembers"

groupwithoutmembers.NewGroupWithoutMembers(scope Construct, id *string, config GroupWithoutMembersConfig) GroupWithoutMembers
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig">GroupWithoutMembersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig">GroupWithoutMembersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putDynamicMembership">PutDynamicMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAdministrativeUnitIds">ResetAdministrativeUnitIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAssignableToRole">ResetAssignableToRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAutoSubscribeNewMembers">ResetAutoSubscribeNewMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetBehaviors">ResetBehaviors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetDynamicMembership">ResetDynamicMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetExternalSendersAllowed">ResetExternalSendersAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetHideFromAddressLists">ResetHideFromAddressLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetHideFromOutlookClients">ResetHideFromOutlookClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetMailEnabled">ResetMailEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetMailNickname">ResetMailNickname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOnpremisesGroupType">ResetOnpremisesGroupType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOwners">ResetOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetPreventDuplicateNames">ResetPreventDuplicateNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetProvisioningOptions">ResetProvisioningOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetSecurityEnabled">ResetSecurityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTheme">ResetTheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTypes">ResetTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetVisibility">ResetVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetWritebackEnabled">ResetWritebackEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDynamicMembership` <a name="PutDynamicMembership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putDynamicMembership"></a>

```go
func PutDynamicMembership(value GroupWithoutMembersDynamicMembership)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putDynamicMembership.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putTimeouts"></a>

```go
func PutTimeouts(value GroupWithoutMembersTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a>

---

##### `ResetAdministrativeUnitIds` <a name="ResetAdministrativeUnitIds" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAdministrativeUnitIds"></a>

```go
func ResetAdministrativeUnitIds()
```

##### `ResetAssignableToRole` <a name="ResetAssignableToRole" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAssignableToRole"></a>

```go
func ResetAssignableToRole()
```

##### `ResetAutoSubscribeNewMembers` <a name="ResetAutoSubscribeNewMembers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAutoSubscribeNewMembers"></a>

```go
func ResetAutoSubscribeNewMembers()
```

##### `ResetBehaviors` <a name="ResetBehaviors" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetBehaviors"></a>

```go
func ResetBehaviors()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDynamicMembership` <a name="ResetDynamicMembership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetDynamicMembership"></a>

```go
func ResetDynamicMembership()
```

##### `ResetExternalSendersAllowed` <a name="ResetExternalSendersAllowed" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetExternalSendersAllowed"></a>

```go
func ResetExternalSendersAllowed()
```

##### `ResetHideFromAddressLists` <a name="ResetHideFromAddressLists" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetHideFromAddressLists"></a>

```go
func ResetHideFromAddressLists()
```

##### `ResetHideFromOutlookClients` <a name="ResetHideFromOutlookClients" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetHideFromOutlookClients"></a>

```go
func ResetHideFromOutlookClients()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetId"></a>

```go
func ResetId()
```

##### `ResetMailEnabled` <a name="ResetMailEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetMailEnabled"></a>

```go
func ResetMailEnabled()
```

##### `ResetMailNickname` <a name="ResetMailNickname" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetMailNickname"></a>

```go
func ResetMailNickname()
```

##### `ResetOnpremisesGroupType` <a name="ResetOnpremisesGroupType" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOnpremisesGroupType"></a>

```go
func ResetOnpremisesGroupType()
```

##### `ResetOwners` <a name="ResetOwners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOwners"></a>

```go
func ResetOwners()
```

##### `ResetPreventDuplicateNames` <a name="ResetPreventDuplicateNames" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetPreventDuplicateNames"></a>

```go
func ResetPreventDuplicateNames()
```

##### `ResetProvisioningOptions` <a name="ResetProvisioningOptions" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetProvisioningOptions"></a>

```go
func ResetProvisioningOptions()
```

##### `ResetSecurityEnabled` <a name="ResetSecurityEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetSecurityEnabled"></a>

```go
func ResetSecurityEnabled()
```

##### `ResetTheme` <a name="ResetTheme" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTheme"></a>

```go
func ResetTheme()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTypes` <a name="ResetTypes" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTypes"></a>

```go
func ResetTypes()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetVisibility"></a>

```go
func ResetVisibility()
```

##### `ResetWritebackEnabled` <a name="ResetWritebackEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetWritebackEnabled"></a>

```go
func ResetWritebackEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GroupWithoutMembers resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/groupwithoutmembers"

groupwithoutmembers.GroupWithoutMembers_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/groupwithoutmembers"

groupwithoutmembers.GroupWithoutMembers_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/groupwithoutmembers"

groupwithoutmembers.GroupWithoutMembers_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/groupwithoutmembers"

groupwithoutmembers.GroupWithoutMembers_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GroupWithoutMembers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GroupWithoutMembers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GroupWithoutMembers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GroupWithoutMembers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dynamicMembership">DynamicMembership</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference">GroupWithoutMembersDynamicMembershipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mail">Mail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesDomainName">OnpremisesDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesNetbiosName">OnpremisesNetbiosName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSamAccountName">OnpremisesSamAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSecurityIdentifier">OnpremisesSecurityIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSyncEnabled">OnpremisesSyncEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preferredLanguage">PreferredLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.proxyAddresses">ProxyAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference">GroupWithoutMembersTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.administrativeUnitIdsInput">AdministrativeUnitIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.assignableToRoleInput">AssignableToRoleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.autoSubscribeNewMembersInput">AutoSubscribeNewMembersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.behaviorsInput">BehaviorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dynamicMembershipInput">DynamicMembershipInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.externalSendersAllowedInput">ExternalSendersAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromAddressListsInput">HideFromAddressListsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromOutlookClientsInput">HideFromOutlookClientsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailEnabledInput">MailEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailNicknameInput">MailNicknameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesGroupTypeInput">OnpremisesGroupTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.ownersInput">OwnersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preventDuplicateNamesInput">PreventDuplicateNamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioningOptionsInput">ProvisioningOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.securityEnabledInput">SecurityEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.themeInput">ThemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.typesInput">TypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.visibilityInput">VisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.writebackEnabledInput">WritebackEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.administrativeUnitIds">AdministrativeUnitIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.assignableToRole">AssignableToRole</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.autoSubscribeNewMembers">AutoSubscribeNewMembers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.behaviors">Behaviors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.externalSendersAllowed">ExternalSendersAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromAddressLists">HideFromAddressLists</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromOutlookClients">HideFromOutlookClients</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailEnabled">MailEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailNickname">MailNickname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesGroupType">OnpremisesGroupType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.owners">Owners</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preventDuplicateNames">PreventDuplicateNames</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioningOptions">ProvisioningOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.securityEnabled">SecurityEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.theme">Theme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.types">Types</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.writebackEnabled">WritebackEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DynamicMembership`<sup>Required</sup> <a name="DynamicMembership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dynamicMembership"></a>

```go
func DynamicMembership() GroupWithoutMembersDynamicMembershipOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference">GroupWithoutMembersDynamicMembershipOutputReference</a>

---

##### `Mail`<sup>Required</sup> <a name="Mail" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mail"></a>

```go
func Mail() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `OnpremisesDomainName`<sup>Required</sup> <a name="OnpremisesDomainName" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesDomainName"></a>

```go
func OnpremisesDomainName() *string
```

- *Type:* *string

---

##### `OnpremisesNetbiosName`<sup>Required</sup> <a name="OnpremisesNetbiosName" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesNetbiosName"></a>

```go
func OnpremisesNetbiosName() *string
```

- *Type:* *string

---

##### `OnpremisesSamAccountName`<sup>Required</sup> <a name="OnpremisesSamAccountName" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSamAccountName"></a>

```go
func OnpremisesSamAccountName() *string
```

- *Type:* *string

---

##### `OnpremisesSecurityIdentifier`<sup>Required</sup> <a name="OnpremisesSecurityIdentifier" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSecurityIdentifier"></a>

```go
func OnpremisesSecurityIdentifier() *string
```

- *Type:* *string

---

##### `OnpremisesSyncEnabled`<sup>Required</sup> <a name="OnpremisesSyncEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSyncEnabled"></a>

```go
func OnpremisesSyncEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preferredLanguage"></a>

```go
func PreferredLanguage() *string
```

- *Type:* *string

---

##### `ProxyAddresses`<sup>Required</sup> <a name="ProxyAddresses" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.proxyAddresses"></a>

```go
func ProxyAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.timeouts"></a>

```go
func Timeouts() GroupWithoutMembersTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference">GroupWithoutMembersTimeoutsOutputReference</a>

---

##### `AdministrativeUnitIdsInput`<sup>Optional</sup> <a name="AdministrativeUnitIdsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.administrativeUnitIdsInput"></a>

```go
func AdministrativeUnitIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AssignableToRoleInput`<sup>Optional</sup> <a name="AssignableToRoleInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.assignableToRoleInput"></a>

```go
func AssignableToRoleInput() interface{}
```

- *Type:* interface{}

---

##### `AutoSubscribeNewMembersInput`<sup>Optional</sup> <a name="AutoSubscribeNewMembersInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.autoSubscribeNewMembersInput"></a>

```go
func AutoSubscribeNewMembersInput() interface{}
```

- *Type:* interface{}

---

##### `BehaviorsInput`<sup>Optional</sup> <a name="BehaviorsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.behaviorsInput"></a>

```go
func BehaviorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DynamicMembershipInput`<sup>Optional</sup> <a name="DynamicMembershipInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dynamicMembershipInput"></a>

```go
func DynamicMembershipInput() GroupWithoutMembersDynamicMembership
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a>

---

##### `ExternalSendersAllowedInput`<sup>Optional</sup> <a name="ExternalSendersAllowedInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.externalSendersAllowedInput"></a>

```go
func ExternalSendersAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `HideFromAddressListsInput`<sup>Optional</sup> <a name="HideFromAddressListsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromAddressListsInput"></a>

```go
func HideFromAddressListsInput() interface{}
```

- *Type:* interface{}

---

##### `HideFromOutlookClientsInput`<sup>Optional</sup> <a name="HideFromOutlookClientsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromOutlookClientsInput"></a>

```go
func HideFromOutlookClientsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MailEnabledInput`<sup>Optional</sup> <a name="MailEnabledInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailEnabledInput"></a>

```go
func MailEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MailNicknameInput`<sup>Optional</sup> <a name="MailNicknameInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailNicknameInput"></a>

```go
func MailNicknameInput() *string
```

- *Type:* *string

---

##### `OnpremisesGroupTypeInput`<sup>Optional</sup> <a name="OnpremisesGroupTypeInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesGroupTypeInput"></a>

```go
func OnpremisesGroupTypeInput() *string
```

- *Type:* *string

---

##### `OwnersInput`<sup>Optional</sup> <a name="OwnersInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.ownersInput"></a>

```go
func OwnersInput() *[]*string
```

- *Type:* *[]*string

---

##### `PreventDuplicateNamesInput`<sup>Optional</sup> <a name="PreventDuplicateNamesInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preventDuplicateNamesInput"></a>

```go
func PreventDuplicateNamesInput() interface{}
```

- *Type:* interface{}

---

##### `ProvisioningOptionsInput`<sup>Optional</sup> <a name="ProvisioningOptionsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioningOptionsInput"></a>

```go
func ProvisioningOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityEnabledInput`<sup>Optional</sup> <a name="SecurityEnabledInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.securityEnabledInput"></a>

```go
func SecurityEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ThemeInput`<sup>Optional</sup> <a name="ThemeInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.themeInput"></a>

```go
func ThemeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypesInput`<sup>Optional</sup> <a name="TypesInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.typesInput"></a>

```go
func TypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.visibilityInput"></a>

```go
func VisibilityInput() *string
```

- *Type:* *string

---

##### `WritebackEnabledInput`<sup>Optional</sup> <a name="WritebackEnabledInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.writebackEnabledInput"></a>

```go
func WritebackEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AdministrativeUnitIds`<sup>Required</sup> <a name="AdministrativeUnitIds" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.administrativeUnitIds"></a>

```go
func AdministrativeUnitIds() *[]*string
```

- *Type:* *[]*string

---

##### `AssignableToRole`<sup>Required</sup> <a name="AssignableToRole" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.assignableToRole"></a>

```go
func AssignableToRole() interface{}
```

- *Type:* interface{}

---

##### `AutoSubscribeNewMembers`<sup>Required</sup> <a name="AutoSubscribeNewMembers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.autoSubscribeNewMembers"></a>

```go
func AutoSubscribeNewMembers() interface{}
```

- *Type:* interface{}

---

##### `Behaviors`<sup>Required</sup> <a name="Behaviors" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.behaviors"></a>

```go
func Behaviors() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExternalSendersAllowed`<sup>Required</sup> <a name="ExternalSendersAllowed" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.externalSendersAllowed"></a>

```go
func ExternalSendersAllowed() interface{}
```

- *Type:* interface{}

---

##### `HideFromAddressLists`<sup>Required</sup> <a name="HideFromAddressLists" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromAddressLists"></a>

```go
func HideFromAddressLists() interface{}
```

- *Type:* interface{}

---

##### `HideFromOutlookClients`<sup>Required</sup> <a name="HideFromOutlookClients" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromOutlookClients"></a>

```go
func HideFromOutlookClients() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MailEnabled`<sup>Required</sup> <a name="MailEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailEnabled"></a>

```go
func MailEnabled() interface{}
```

- *Type:* interface{}

---

##### `MailNickname`<sup>Required</sup> <a name="MailNickname" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailNickname"></a>

```go
func MailNickname() *string
```

- *Type:* *string

---

##### `OnpremisesGroupType`<sup>Required</sup> <a name="OnpremisesGroupType" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesGroupType"></a>

```go
func OnpremisesGroupType() *string
```

- *Type:* *string

---

##### `Owners`<sup>Required</sup> <a name="Owners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.owners"></a>

```go
func Owners() *[]*string
```

- *Type:* *[]*string

---

##### `PreventDuplicateNames`<sup>Required</sup> <a name="PreventDuplicateNames" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preventDuplicateNames"></a>

```go
func PreventDuplicateNames() interface{}
```

- *Type:* interface{}

---

##### `ProvisioningOptions`<sup>Required</sup> <a name="ProvisioningOptions" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioningOptions"></a>

```go
func ProvisioningOptions() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityEnabled`<sup>Required</sup> <a name="SecurityEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.securityEnabled"></a>

```go
func SecurityEnabled() interface{}
```

- *Type:* interface{}

---

##### `Theme`<sup>Required</sup> <a name="Theme" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.theme"></a>

```go
func Theme() *string
```

- *Type:* *string

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.types"></a>

```go
func Types() *[]*string
```

- *Type:* *[]*string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

##### `WritebackEnabled`<sup>Required</sup> <a name="WritebackEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.writebackEnabled"></a>

```go
func WritebackEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupWithoutMembersConfig <a name="GroupWithoutMembersConfig" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/groupwithoutmembers"

&groupwithoutmembers.GroupWithoutMembersConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	AdministrativeUnitIds: *[]*string,
	AssignableToRole: interface{},
	AutoSubscribeNewMembers: interface{},
	Behaviors: *[]*string,
	Description: *string,
	DynamicMembership: github.com/cdktf/cdktf-provider-azuread-go/azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership,
	ExternalSendersAllowed: interface{},
	HideFromAddressLists: interface{},
	HideFromOutlookClients: interface{},
	Id: *string,
	MailEnabled: interface{},
	MailNickname: *string,
	OnpremisesGroupType: *string,
	Owners: *[]*string,
	PreventDuplicateNames: interface{},
	ProvisioningOptions: *[]*string,
	SecurityEnabled: interface{},
	Theme: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azuread-go/azuread.groupWithoutMembers.GroupWithoutMembersTimeouts,
	Types: *[]*string,
	Visibility: *string,
	WritebackEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name for the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.administrativeUnitIds">AdministrativeUnitIds</a></code> | <code>*[]*string</code> | The administrative unit IDs in which the group should be. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.assignableToRole">AssignableToRole</a></code> | <code>interface{}</code> | Indicates whether this group can be assigned to an Azure Active Directory role. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.autoSubscribeNewMembers">AutoSubscribeNewMembers</a></code> | <code>interface{}</code> | Indicates whether new members added to the group will be auto-subscribed to receive email notifications. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.behaviors">Behaviors</a></code> | <code>*[]*string</code> | The group behaviours for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.description">Description</a></code> | <code>*string</code> | The description for the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.dynamicMembership">DynamicMembership</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a></code> | dynamic_membership block. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.externalSendersAllowed">ExternalSendersAllowed</a></code> | <code>interface{}</code> | Indicates whether people external to the organization can send messages to the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.hideFromAddressLists">HideFromAddressLists</a></code> | <code>interface{}</code> | Indicates whether the group is displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.hideFromOutlookClients">HideFromOutlookClients</a></code> | <code>interface{}</code> | Indicates whether the group is displayed in Outlook clients, such as Outlook for Windows and Outlook on the web. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#id GroupWithoutMembers#id}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.mailEnabled">MailEnabled</a></code> | <code>interface{}</code> | Whether the group is a mail enabled, with a shared group mailbox. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.mailNickname">MailNickname</a></code> | <code>*string</code> | The mail alias for the group, unique in the organisation. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.onpremisesGroupType">OnpremisesGroupType</a></code> | <code>*string</code> | Indicates the target on-premise group type the group will be written back as. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.owners">Owners</a></code> | <code>*[]*string</code> | A set of owners who own this group. Supported object types are Users or Service Principals. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.preventDuplicateNames">PreventDuplicateNames</a></code> | <code>interface{}</code> | If `true`, will return an error if an existing group is found with the same name. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provisioningOptions">ProvisioningOptions</a></code> | <code>*[]*string</code> | The group provisioning options for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.securityEnabled">SecurityEnabled</a></code> | <code>interface{}</code> | Whether the group is a security group for controlling access to in-app resources. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.theme">Theme</a></code> | <code>*string</code> | The colour theme for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.types">Types</a></code> | <code>*[]*string</code> | A set of group types to configure for the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.visibility">Visibility</a></code> | <code>*string</code> | Specifies the group join policy and group content visibility. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.writebackEnabled">WritebackEnabled</a></code> | <code>interface{}</code> | Whether this group should be synced from Azure AD to the on-premises directory when Azure AD Connect is used. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#display_name GroupWithoutMembers#display_name}

---

##### `AdministrativeUnitIds`<sup>Optional</sup> <a name="AdministrativeUnitIds" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.administrativeUnitIds"></a>

```go
AdministrativeUnitIds *[]*string
```

- *Type:* *[]*string

The administrative unit IDs in which the group should be.

If empty, the group will be created at the tenant level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#administrative_unit_ids GroupWithoutMembers#administrative_unit_ids}

---

##### `AssignableToRole`<sup>Optional</sup> <a name="AssignableToRole" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.assignableToRole"></a>

```go
AssignableToRole interface{}
```

- *Type:* interface{}

Indicates whether this group can be assigned to an Azure Active Directory role.

This property can only be `true` for security-enabled groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#assignable_to_role GroupWithoutMembers#assignable_to_role}

---

##### `AutoSubscribeNewMembers`<sup>Optional</sup> <a name="AutoSubscribeNewMembers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.autoSubscribeNewMembers"></a>

```go
AutoSubscribeNewMembers interface{}
```

- *Type:* interface{}

Indicates whether new members added to the group will be auto-subscribed to receive email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#auto_subscribe_new_members GroupWithoutMembers#auto_subscribe_new_members}

---

##### `Behaviors`<sup>Optional</sup> <a name="Behaviors" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.behaviors"></a>

```go
Behaviors *[]*string
```

- *Type:* *[]*string

The group behaviours for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#behaviors GroupWithoutMembers#behaviors}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#description GroupWithoutMembers#description}

---

##### `DynamicMembership`<sup>Optional</sup> <a name="DynamicMembership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.dynamicMembership"></a>

```go
DynamicMembership GroupWithoutMembersDynamicMembership
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a>

dynamic_membership block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#dynamic_membership GroupWithoutMembers#dynamic_membership}

---

##### `ExternalSendersAllowed`<sup>Optional</sup> <a name="ExternalSendersAllowed" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.externalSendersAllowed"></a>

```go
ExternalSendersAllowed interface{}
```

- *Type:* interface{}

Indicates whether people external to the organization can send messages to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#external_senders_allowed GroupWithoutMembers#external_senders_allowed}

---

##### `HideFromAddressLists`<sup>Optional</sup> <a name="HideFromAddressLists" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.hideFromAddressLists"></a>

```go
HideFromAddressLists interface{}
```

- *Type:* interface{}

Indicates whether the group is displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#hide_from_address_lists GroupWithoutMembers#hide_from_address_lists}

---

##### `HideFromOutlookClients`<sup>Optional</sup> <a name="HideFromOutlookClients" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.hideFromOutlookClients"></a>

```go
HideFromOutlookClients interface{}
```

- *Type:* interface{}

Indicates whether the group is displayed in Outlook clients, such as Outlook for Windows and Outlook on the web.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#hide_from_outlook_clients GroupWithoutMembers#hide_from_outlook_clients}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#id GroupWithoutMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MailEnabled`<sup>Optional</sup> <a name="MailEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.mailEnabled"></a>

```go
MailEnabled interface{}
```

- *Type:* interface{}

Whether the group is a mail enabled, with a shared group mailbox.

At least one of `mail_enabled` or `security_enabled` must be specified. A group can be mail enabled *and* security enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#mail_enabled GroupWithoutMembers#mail_enabled}

---

##### `MailNickname`<sup>Optional</sup> <a name="MailNickname" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.mailNickname"></a>

```go
MailNickname *string
```

- *Type:* *string

The mail alias for the group, unique in the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#mail_nickname GroupWithoutMembers#mail_nickname}

---

##### `OnpremisesGroupType`<sup>Optional</sup> <a name="OnpremisesGroupType" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.onpremisesGroupType"></a>

```go
OnpremisesGroupType *string
```

- *Type:* *string

Indicates the target on-premise group type the group will be written back as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#onpremises_group_type GroupWithoutMembers#onpremises_group_type}

---

##### `Owners`<sup>Optional</sup> <a name="Owners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.owners"></a>

```go
Owners *[]*string
```

- *Type:* *[]*string

A set of owners who own this group. Supported object types are Users or Service Principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#owners GroupWithoutMembers#owners}

---

##### `PreventDuplicateNames`<sup>Optional</sup> <a name="PreventDuplicateNames" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.preventDuplicateNames"></a>

```go
PreventDuplicateNames interface{}
```

- *Type:* interface{}

If `true`, will return an error if an existing group is found with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#prevent_duplicate_names GroupWithoutMembers#prevent_duplicate_names}

---

##### `ProvisioningOptions`<sup>Optional</sup> <a name="ProvisioningOptions" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provisioningOptions"></a>

```go
ProvisioningOptions *[]*string
```

- *Type:* *[]*string

The group provisioning options for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#provisioning_options GroupWithoutMembers#provisioning_options}

---

##### `SecurityEnabled`<sup>Optional</sup> <a name="SecurityEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.securityEnabled"></a>

```go
SecurityEnabled interface{}
```

- *Type:* interface{}

Whether the group is a security group for controlling access to in-app resources.

At least one of `security_enabled` or `mail_enabled` must be specified. A group can be security enabled *and* mail enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#security_enabled GroupWithoutMembers#security_enabled}

---

##### `Theme`<sup>Optional</sup> <a name="Theme" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.theme"></a>

```go
Theme *string
```

- *Type:* *string

The colour theme for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#theme GroupWithoutMembers#theme}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.timeouts"></a>

```go
Timeouts GroupWithoutMembersTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#timeouts GroupWithoutMembers#timeouts}

---

##### `Types`<sup>Optional</sup> <a name="Types" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.types"></a>

```go
Types *[]*string
```

- *Type:* *[]*string

A set of group types to configure for the group.

`Unified` specifies a Microsoft 365 group. Required when `mail_enabled` is true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#types GroupWithoutMembers#types}

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.visibility"></a>

```go
Visibility *string
```

- *Type:* *string

Specifies the group join policy and group content visibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#visibility GroupWithoutMembers#visibility}

---

##### `WritebackEnabled`<sup>Optional</sup> <a name="WritebackEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.writebackEnabled"></a>

```go
WritebackEnabled interface{}
```

- *Type:* interface{}

Whether this group should be synced from Azure AD to the on-premises directory when Azure AD Connect is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#writeback_enabled GroupWithoutMembers#writeback_enabled}

---

### GroupWithoutMembersDynamicMembership <a name="GroupWithoutMembersDynamicMembership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/groupwithoutmembers"

&groupwithoutmembers.GroupWithoutMembersDynamicMembership {
	Enabled: interface{},
	Rule: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#enabled GroupWithoutMembers#enabled}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.property.rule">Rule</a></code> | <code>*string</code> | Rule to determine members for a dynamic group. Required when `group_types` contains 'DynamicMembership'. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#enabled GroupWithoutMembers#enabled}.

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.property.rule"></a>

```go
Rule *string
```

- *Type:* *string

Rule to determine members for a dynamic group. Required when `group_types` contains 'DynamicMembership'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#rule GroupWithoutMembers#rule}

---

### GroupWithoutMembersTimeouts <a name="GroupWithoutMembersTimeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/groupwithoutmembers"

&groupwithoutmembers.GroupWithoutMembersTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#create GroupWithoutMembers#create}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#delete GroupWithoutMembers#delete}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#read GroupWithoutMembers#read}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#update GroupWithoutMembers#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#create GroupWithoutMembers#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#delete GroupWithoutMembers#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#read GroupWithoutMembers#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/group_without_members#update GroupWithoutMembers#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroupWithoutMembersDynamicMembershipOutputReference <a name="GroupWithoutMembersDynamicMembershipOutputReference" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/groupwithoutmembers"

groupwithoutmembers.NewGroupWithoutMembersDynamicMembershipOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupWithoutMembersDynamicMembershipOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.ruleInput">RuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.rule">Rule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.ruleInput"></a>

```go
func RuleInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.rule"></a>

```go
func Rule() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.internalValue"></a>

```go
func InternalValue() GroupWithoutMembersDynamicMembership
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a>

---


### GroupWithoutMembersTimeoutsOutputReference <a name="GroupWithoutMembersTimeoutsOutputReference" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/groupwithoutmembers"

groupwithoutmembers.NewGroupWithoutMembersTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupWithoutMembersTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



