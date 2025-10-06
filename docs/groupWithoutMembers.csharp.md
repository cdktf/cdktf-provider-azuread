# `groupWithoutMembers` Submodule <a name="`groupWithoutMembers` Submodule" id="@cdktf/provider-azuread.groupWithoutMembers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupWithoutMembers <a name="GroupWithoutMembers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members azuread_group_without_members}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new GroupWithoutMembers(Construct Scope, string Id, GroupWithoutMembersConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig">GroupWithoutMembersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDynamicMembership` <a name="PutDynamicMembership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putDynamicMembership"></a>

```csharp
private void PutDynamicMembership(GroupWithoutMembersDynamicMembership Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putDynamicMembership.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putTimeouts"></a>

```csharp
private void PutTimeouts(GroupWithoutMembersTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a>

---

##### `ResetAdministrativeUnitIds` <a name="ResetAdministrativeUnitIds" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAdministrativeUnitIds"></a>

```csharp
private void ResetAdministrativeUnitIds()
```

##### `ResetAssignableToRole` <a name="ResetAssignableToRole" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAssignableToRole"></a>

```csharp
private void ResetAssignableToRole()
```

##### `ResetAutoSubscribeNewMembers` <a name="ResetAutoSubscribeNewMembers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAutoSubscribeNewMembers"></a>

```csharp
private void ResetAutoSubscribeNewMembers()
```

##### `ResetBehaviors` <a name="ResetBehaviors" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetBehaviors"></a>

```csharp
private void ResetBehaviors()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDynamicMembership` <a name="ResetDynamicMembership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetDynamicMembership"></a>

```csharp
private void ResetDynamicMembership()
```

##### `ResetExternalSendersAllowed` <a name="ResetExternalSendersAllowed" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetExternalSendersAllowed"></a>

```csharp
private void ResetExternalSendersAllowed()
```

##### `ResetHideFromAddressLists` <a name="ResetHideFromAddressLists" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetHideFromAddressLists"></a>

```csharp
private void ResetHideFromAddressLists()
```

##### `ResetHideFromOutlookClients` <a name="ResetHideFromOutlookClients" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetHideFromOutlookClients"></a>

```csharp
private void ResetHideFromOutlookClients()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMailEnabled` <a name="ResetMailEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetMailEnabled"></a>

```csharp
private void ResetMailEnabled()
```

##### `ResetMailNickname` <a name="ResetMailNickname" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetMailNickname"></a>

```csharp
private void ResetMailNickname()
```

##### `ResetOnpremisesGroupType` <a name="ResetOnpremisesGroupType" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOnpremisesGroupType"></a>

```csharp
private void ResetOnpremisesGroupType()
```

##### `ResetOwners` <a name="ResetOwners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOwners"></a>

```csharp
private void ResetOwners()
```

##### `ResetPreventDuplicateNames` <a name="ResetPreventDuplicateNames" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetPreventDuplicateNames"></a>

```csharp
private void ResetPreventDuplicateNames()
```

##### `ResetProvisioningOptions` <a name="ResetProvisioningOptions" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetProvisioningOptions"></a>

```csharp
private void ResetProvisioningOptions()
```

##### `ResetSecurityEnabled` <a name="ResetSecurityEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetSecurityEnabled"></a>

```csharp
private void ResetSecurityEnabled()
```

##### `ResetTheme` <a name="ResetTheme" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTheme"></a>

```csharp
private void ResetTheme()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTypes` <a name="ResetTypes" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTypes"></a>

```csharp
private void ResetTypes()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetVisibility"></a>

```csharp
private void ResetVisibility()
```

##### `ResetWritebackEnabled` <a name="ResetWritebackEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetWritebackEnabled"></a>

```csharp
private void ResetWritebackEnabled()
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

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

GroupWithoutMembers.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

GroupWithoutMembers.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

GroupWithoutMembers.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

GroupWithoutMembers.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GroupWithoutMembers resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GroupWithoutMembers to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GroupWithoutMembers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GroupWithoutMembers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dynamicMembership">DynamicMembership</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference">GroupWithoutMembersDynamicMembershipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mail">Mail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesDomainName">OnpremisesDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesNetbiosName">OnpremisesNetbiosName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSamAccountName">OnpremisesSamAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSecurityIdentifier">OnpremisesSecurityIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSyncEnabled">OnpremisesSyncEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preferredLanguage">PreferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.proxyAddresses">ProxyAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference">GroupWithoutMembersTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.administrativeUnitIdsInput">AdministrativeUnitIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.assignableToRoleInput">AssignableToRoleInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.autoSubscribeNewMembersInput">AutoSubscribeNewMembersInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.behaviorsInput">BehaviorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dynamicMembershipInput">DynamicMembershipInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.externalSendersAllowedInput">ExternalSendersAllowedInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromAddressListsInput">HideFromAddressListsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromOutlookClientsInput">HideFromOutlookClientsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailEnabledInput">MailEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailNicknameInput">MailNicknameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesGroupTypeInput">OnpremisesGroupTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.ownersInput">OwnersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preventDuplicateNamesInput">PreventDuplicateNamesInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioningOptionsInput">ProvisioningOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.securityEnabledInput">SecurityEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.themeInput">ThemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.typesInput">TypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.writebackEnabledInput">WritebackEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.administrativeUnitIds">AdministrativeUnitIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.assignableToRole">AssignableToRole</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.autoSubscribeNewMembers">AutoSubscribeNewMembers</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.behaviors">Behaviors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.externalSendersAllowed">ExternalSendersAllowed</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromAddressLists">HideFromAddressLists</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromOutlookClients">HideFromOutlookClients</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailEnabled">MailEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailNickname">MailNickname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesGroupType">OnpremisesGroupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.owners">Owners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preventDuplicateNames">PreventDuplicateNames</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioningOptions">ProvisioningOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.securityEnabled">SecurityEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.theme">Theme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.types">Types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.writebackEnabled">WritebackEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `DynamicMembership`<sup>Required</sup> <a name="DynamicMembership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dynamicMembership"></a>

```csharp
public GroupWithoutMembersDynamicMembershipOutputReference DynamicMembership { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference">GroupWithoutMembersDynamicMembershipOutputReference</a>

---

##### `Mail`<sup>Required</sup> <a name="Mail" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mail"></a>

```csharp
public string Mail { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `OnpremisesDomainName`<sup>Required</sup> <a name="OnpremisesDomainName" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesDomainName"></a>

```csharp
public string OnpremisesDomainName { get; }
```

- *Type:* string

---

##### `OnpremisesNetbiosName`<sup>Required</sup> <a name="OnpremisesNetbiosName" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesNetbiosName"></a>

```csharp
public string OnpremisesNetbiosName { get; }
```

- *Type:* string

---

##### `OnpremisesSamAccountName`<sup>Required</sup> <a name="OnpremisesSamAccountName" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSamAccountName"></a>

```csharp
public string OnpremisesSamAccountName { get; }
```

- *Type:* string

---

##### `OnpremisesSecurityIdentifier`<sup>Required</sup> <a name="OnpremisesSecurityIdentifier" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSecurityIdentifier"></a>

```csharp
public string OnpremisesSecurityIdentifier { get; }
```

- *Type:* string

---

##### `OnpremisesSyncEnabled`<sup>Required</sup> <a name="OnpremisesSyncEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSyncEnabled"></a>

```csharp
public IResolvable OnpremisesSyncEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preferredLanguage"></a>

```csharp
public string PreferredLanguage { get; }
```

- *Type:* string

---

##### `ProxyAddresses`<sup>Required</sup> <a name="ProxyAddresses" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.proxyAddresses"></a>

```csharp
public string[] ProxyAddresses { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.timeouts"></a>

```csharp
public GroupWithoutMembersTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference">GroupWithoutMembersTimeoutsOutputReference</a>

---

##### `AdministrativeUnitIdsInput`<sup>Optional</sup> <a name="AdministrativeUnitIdsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.administrativeUnitIdsInput"></a>

```csharp
public string[] AdministrativeUnitIdsInput { get; }
```

- *Type:* string[]

---

##### `AssignableToRoleInput`<sup>Optional</sup> <a name="AssignableToRoleInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.assignableToRoleInput"></a>

```csharp
public bool|IResolvable AssignableToRoleInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AutoSubscribeNewMembersInput`<sup>Optional</sup> <a name="AutoSubscribeNewMembersInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.autoSubscribeNewMembersInput"></a>

```csharp
public bool|IResolvable AutoSubscribeNewMembersInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `BehaviorsInput`<sup>Optional</sup> <a name="BehaviorsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.behaviorsInput"></a>

```csharp
public string[] BehaviorsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DynamicMembershipInput`<sup>Optional</sup> <a name="DynamicMembershipInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dynamicMembershipInput"></a>

```csharp
public GroupWithoutMembersDynamicMembership DynamicMembershipInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a>

---

##### `ExternalSendersAllowedInput`<sup>Optional</sup> <a name="ExternalSendersAllowedInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.externalSendersAllowedInput"></a>

```csharp
public bool|IResolvable ExternalSendersAllowedInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `HideFromAddressListsInput`<sup>Optional</sup> <a name="HideFromAddressListsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromAddressListsInput"></a>

```csharp
public bool|IResolvable HideFromAddressListsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `HideFromOutlookClientsInput`<sup>Optional</sup> <a name="HideFromOutlookClientsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromOutlookClientsInput"></a>

```csharp
public bool|IResolvable HideFromOutlookClientsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MailEnabledInput`<sup>Optional</sup> <a name="MailEnabledInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailEnabledInput"></a>

```csharp
public bool|IResolvable MailEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MailNicknameInput`<sup>Optional</sup> <a name="MailNicknameInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailNicknameInput"></a>

```csharp
public string MailNicknameInput { get; }
```

- *Type:* string

---

##### `OnpremisesGroupTypeInput`<sup>Optional</sup> <a name="OnpremisesGroupTypeInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesGroupTypeInput"></a>

```csharp
public string OnpremisesGroupTypeInput { get; }
```

- *Type:* string

---

##### `OwnersInput`<sup>Optional</sup> <a name="OwnersInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.ownersInput"></a>

```csharp
public string[] OwnersInput { get; }
```

- *Type:* string[]

---

##### `PreventDuplicateNamesInput`<sup>Optional</sup> <a name="PreventDuplicateNamesInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preventDuplicateNamesInput"></a>

```csharp
public bool|IResolvable PreventDuplicateNamesInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ProvisioningOptionsInput`<sup>Optional</sup> <a name="ProvisioningOptionsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioningOptionsInput"></a>

```csharp
public string[] ProvisioningOptionsInput { get; }
```

- *Type:* string[]

---

##### `SecurityEnabledInput`<sup>Optional</sup> <a name="SecurityEnabledInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.securityEnabledInput"></a>

```csharp
public bool|IResolvable SecurityEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ThemeInput`<sup>Optional</sup> <a name="ThemeInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.themeInput"></a>

```csharp
public string ThemeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.timeoutsInput"></a>

```csharp
public IResolvable|GroupWithoutMembersTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a>

---

##### `TypesInput`<sup>Optional</sup> <a name="TypesInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.typesInput"></a>

```csharp
public string[] TypesInput { get; }
```

- *Type:* string[]

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `WritebackEnabledInput`<sup>Optional</sup> <a name="WritebackEnabledInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.writebackEnabledInput"></a>

```csharp
public bool|IResolvable WritebackEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AdministrativeUnitIds`<sup>Required</sup> <a name="AdministrativeUnitIds" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.administrativeUnitIds"></a>

```csharp
public string[] AdministrativeUnitIds { get; }
```

- *Type:* string[]

---

##### `AssignableToRole`<sup>Required</sup> <a name="AssignableToRole" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.assignableToRole"></a>

```csharp
public bool|IResolvable AssignableToRole { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AutoSubscribeNewMembers`<sup>Required</sup> <a name="AutoSubscribeNewMembers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.autoSubscribeNewMembers"></a>

```csharp
public bool|IResolvable AutoSubscribeNewMembers { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Behaviors`<sup>Required</sup> <a name="Behaviors" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.behaviors"></a>

```csharp
public string[] Behaviors { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalSendersAllowed`<sup>Required</sup> <a name="ExternalSendersAllowed" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.externalSendersAllowed"></a>

```csharp
public bool|IResolvable ExternalSendersAllowed { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `HideFromAddressLists`<sup>Required</sup> <a name="HideFromAddressLists" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromAddressLists"></a>

```csharp
public bool|IResolvable HideFromAddressLists { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `HideFromOutlookClients`<sup>Required</sup> <a name="HideFromOutlookClients" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromOutlookClients"></a>

```csharp
public bool|IResolvable HideFromOutlookClients { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MailEnabled`<sup>Required</sup> <a name="MailEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailEnabled"></a>

```csharp
public bool|IResolvable MailEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MailNickname`<sup>Required</sup> <a name="MailNickname" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailNickname"></a>

```csharp
public string MailNickname { get; }
```

- *Type:* string

---

##### `OnpremisesGroupType`<sup>Required</sup> <a name="OnpremisesGroupType" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesGroupType"></a>

```csharp
public string OnpremisesGroupType { get; }
```

- *Type:* string

---

##### `Owners`<sup>Required</sup> <a name="Owners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.owners"></a>

```csharp
public string[] Owners { get; }
```

- *Type:* string[]

---

##### `PreventDuplicateNames`<sup>Required</sup> <a name="PreventDuplicateNames" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preventDuplicateNames"></a>

```csharp
public bool|IResolvable PreventDuplicateNames { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ProvisioningOptions`<sup>Required</sup> <a name="ProvisioningOptions" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioningOptions"></a>

```csharp
public string[] ProvisioningOptions { get; }
```

- *Type:* string[]

---

##### `SecurityEnabled`<sup>Required</sup> <a name="SecurityEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.securityEnabled"></a>

```csharp
public bool|IResolvable SecurityEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Theme`<sup>Required</sup> <a name="Theme" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.theme"></a>

```csharp
public string Theme { get; }
```

- *Type:* string

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.types"></a>

```csharp
public string[] Types { get; }
```

- *Type:* string[]

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

##### `WritebackEnabled`<sup>Required</sup> <a name="WritebackEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.writebackEnabled"></a>

```csharp
public bool|IResolvable WritebackEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupWithoutMembersConfig <a name="GroupWithoutMembersConfig" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new GroupWithoutMembersConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string[] AdministrativeUnitIds = null,
    bool|IResolvable AssignableToRole = null,
    bool|IResolvable AutoSubscribeNewMembers = null,
    string[] Behaviors = null,
    string Description = null,
    GroupWithoutMembersDynamicMembership DynamicMembership = null,
    bool|IResolvable ExternalSendersAllowed = null,
    bool|IResolvable HideFromAddressLists = null,
    bool|IResolvable HideFromOutlookClients = null,
    string Id = null,
    bool|IResolvable MailEnabled = null,
    string MailNickname = null,
    string OnpremisesGroupType = null,
    string[] Owners = null,
    bool|IResolvable PreventDuplicateNames = null,
    string[] ProvisioningOptions = null,
    bool|IResolvable SecurityEnabled = null,
    string Theme = null,
    GroupWithoutMembersTimeouts Timeouts = null,
    string[] Types = null,
    string Visibility = null,
    bool|IResolvable WritebackEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name for the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.administrativeUnitIds">AdministrativeUnitIds</a></code> | <code>string[]</code> | The administrative unit IDs in which the group should be. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.assignableToRole">AssignableToRole</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Indicates whether this group can be assigned to an Azure Active Directory role. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.autoSubscribeNewMembers">AutoSubscribeNewMembers</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Indicates whether new members added to the group will be auto-subscribed to receive email notifications. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.behaviors">Behaviors</a></code> | <code>string[]</code> | The group behaviours for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.description">Description</a></code> | <code>string</code> | The description for the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.dynamicMembership">DynamicMembership</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a></code> | dynamic_membership block. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.externalSendersAllowed">ExternalSendersAllowed</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Indicates whether people external to the organization can send messages to the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.hideFromAddressLists">HideFromAddressLists</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Indicates whether the group is displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.hideFromOutlookClients">HideFromOutlookClients</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Indicates whether the group is displayed in Outlook clients, such as Outlook for Windows and Outlook on the web. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#id GroupWithoutMembers#id}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.mailEnabled">MailEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether the group is a mail enabled, with a shared group mailbox. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.mailNickname">MailNickname</a></code> | <code>string</code> | The mail alias for the group, unique in the organisation. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.onpremisesGroupType">OnpremisesGroupType</a></code> | <code>string</code> | Indicates the target on-premise group type the group will be written back as. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.owners">Owners</a></code> | <code>string[]</code> | A set of owners who own this group. Supported object types are Users or Service Principals. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.preventDuplicateNames">PreventDuplicateNames</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | If `true`, will return an error if an existing group is found with the same name. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provisioningOptions">ProvisioningOptions</a></code> | <code>string[]</code> | The group provisioning options for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.securityEnabled">SecurityEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether the group is a security group for controlling access to in-app resources. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.theme">Theme</a></code> | <code>string</code> | The colour theme for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.types">Types</a></code> | <code>string[]</code> | A set of group types to configure for the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.visibility">Visibility</a></code> | <code>string</code> | Specifies the group join policy and group content visibility. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.writebackEnabled">WritebackEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether this group should be synced from Azure AD to the on-premises directory when Azure AD Connect is used. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#display_name GroupWithoutMembers#display_name}

---

##### `AdministrativeUnitIds`<sup>Optional</sup> <a name="AdministrativeUnitIds" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.administrativeUnitIds"></a>

```csharp
public string[] AdministrativeUnitIds { get; set; }
```

- *Type:* string[]

The administrative unit IDs in which the group should be.

If empty, the group will be created at the tenant level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#administrative_unit_ids GroupWithoutMembers#administrative_unit_ids}

---

##### `AssignableToRole`<sup>Optional</sup> <a name="AssignableToRole" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.assignableToRole"></a>

```csharp
public bool|IResolvable AssignableToRole { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Indicates whether this group can be assigned to an Azure Active Directory role.

This property can only be `true` for security-enabled groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#assignable_to_role GroupWithoutMembers#assignable_to_role}

---

##### `AutoSubscribeNewMembers`<sup>Optional</sup> <a name="AutoSubscribeNewMembers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.autoSubscribeNewMembers"></a>

```csharp
public bool|IResolvable AutoSubscribeNewMembers { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Indicates whether new members added to the group will be auto-subscribed to receive email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#auto_subscribe_new_members GroupWithoutMembers#auto_subscribe_new_members}

---

##### `Behaviors`<sup>Optional</sup> <a name="Behaviors" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.behaviors"></a>

```csharp
public string[] Behaviors { get; set; }
```

- *Type:* string[]

The group behaviours for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#behaviors GroupWithoutMembers#behaviors}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#description GroupWithoutMembers#description}

---

##### `DynamicMembership`<sup>Optional</sup> <a name="DynamicMembership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.dynamicMembership"></a>

```csharp
public GroupWithoutMembersDynamicMembership DynamicMembership { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a>

dynamic_membership block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#dynamic_membership GroupWithoutMembers#dynamic_membership}

---

##### `ExternalSendersAllowed`<sup>Optional</sup> <a name="ExternalSendersAllowed" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.externalSendersAllowed"></a>

```csharp
public bool|IResolvable ExternalSendersAllowed { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Indicates whether people external to the organization can send messages to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#external_senders_allowed GroupWithoutMembers#external_senders_allowed}

---

##### `HideFromAddressLists`<sup>Optional</sup> <a name="HideFromAddressLists" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.hideFromAddressLists"></a>

```csharp
public bool|IResolvable HideFromAddressLists { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Indicates whether the group is displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#hide_from_address_lists GroupWithoutMembers#hide_from_address_lists}

---

##### `HideFromOutlookClients`<sup>Optional</sup> <a name="HideFromOutlookClients" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.hideFromOutlookClients"></a>

```csharp
public bool|IResolvable HideFromOutlookClients { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Indicates whether the group is displayed in Outlook clients, such as Outlook for Windows and Outlook on the web.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#hide_from_outlook_clients GroupWithoutMembers#hide_from_outlook_clients}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#id GroupWithoutMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MailEnabled`<sup>Optional</sup> <a name="MailEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.mailEnabled"></a>

```csharp
public bool|IResolvable MailEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether the group is a mail enabled, with a shared group mailbox.

At least one of `mail_enabled` or `security_enabled` must be specified. A group can be mail enabled *and* security enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#mail_enabled GroupWithoutMembers#mail_enabled}

---

##### `MailNickname`<sup>Optional</sup> <a name="MailNickname" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.mailNickname"></a>

```csharp
public string MailNickname { get; set; }
```

- *Type:* string

The mail alias for the group, unique in the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#mail_nickname GroupWithoutMembers#mail_nickname}

---

##### `OnpremisesGroupType`<sup>Optional</sup> <a name="OnpremisesGroupType" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.onpremisesGroupType"></a>

```csharp
public string OnpremisesGroupType { get; set; }
```

- *Type:* string

Indicates the target on-premise group type the group will be written back as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#onpremises_group_type GroupWithoutMembers#onpremises_group_type}

---

##### `Owners`<sup>Optional</sup> <a name="Owners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.owners"></a>

```csharp
public string[] Owners { get; set; }
```

- *Type:* string[]

A set of owners who own this group. Supported object types are Users or Service Principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#owners GroupWithoutMembers#owners}

---

##### `PreventDuplicateNames`<sup>Optional</sup> <a name="PreventDuplicateNames" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.preventDuplicateNames"></a>

```csharp
public bool|IResolvable PreventDuplicateNames { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

If `true`, will return an error if an existing group is found with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#prevent_duplicate_names GroupWithoutMembers#prevent_duplicate_names}

---

##### `ProvisioningOptions`<sup>Optional</sup> <a name="ProvisioningOptions" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provisioningOptions"></a>

```csharp
public string[] ProvisioningOptions { get; set; }
```

- *Type:* string[]

The group provisioning options for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#provisioning_options GroupWithoutMembers#provisioning_options}

---

##### `SecurityEnabled`<sup>Optional</sup> <a name="SecurityEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.securityEnabled"></a>

```csharp
public bool|IResolvable SecurityEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether the group is a security group for controlling access to in-app resources.

At least one of `security_enabled` or `mail_enabled` must be specified. A group can be security enabled *and* mail enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#security_enabled GroupWithoutMembers#security_enabled}

---

##### `Theme`<sup>Optional</sup> <a name="Theme" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.theme"></a>

```csharp
public string Theme { get; set; }
```

- *Type:* string

The colour theme for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#theme GroupWithoutMembers#theme}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.timeouts"></a>

```csharp
public GroupWithoutMembersTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#timeouts GroupWithoutMembers#timeouts}

---

##### `Types`<sup>Optional</sup> <a name="Types" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.types"></a>

```csharp
public string[] Types { get; set; }
```

- *Type:* string[]

A set of group types to configure for the group.

`Unified` specifies a Microsoft 365 group. Required when `mail_enabled` is true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#types GroupWithoutMembers#types}

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

Specifies the group join policy and group content visibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#visibility GroupWithoutMembers#visibility}

---

##### `WritebackEnabled`<sup>Optional</sup> <a name="WritebackEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.writebackEnabled"></a>

```csharp
public bool|IResolvable WritebackEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether this group should be synced from Azure AD to the on-premises directory when Azure AD Connect is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#writeback_enabled GroupWithoutMembers#writeback_enabled}

---

### GroupWithoutMembersDynamicMembership <a name="GroupWithoutMembersDynamicMembership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new GroupWithoutMembersDynamicMembership {
    bool|IResolvable Enabled,
    string Rule
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#enabled GroupWithoutMembers#enabled}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.property.rule">Rule</a></code> | <code>string</code> | Rule to determine members for a dynamic group. Required when `group_types` contains 'DynamicMembership'. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#enabled GroupWithoutMembers#enabled}.

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.property.rule"></a>

```csharp
public string Rule { get; set; }
```

- *Type:* string

Rule to determine members for a dynamic group. Required when `group_types` contains 'DynamicMembership'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#rule GroupWithoutMembers#rule}

---

### GroupWithoutMembersTimeouts <a name="GroupWithoutMembersTimeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new GroupWithoutMembersTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#create GroupWithoutMembers#create}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#delete GroupWithoutMembers#delete}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#read GroupWithoutMembers#read}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#update GroupWithoutMembers#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#create GroupWithoutMembers#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#delete GroupWithoutMembers#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#read GroupWithoutMembers#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/group_without_members#update GroupWithoutMembers#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroupWithoutMembersDynamicMembershipOutputReference <a name="GroupWithoutMembersDynamicMembershipOutputReference" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new GroupWithoutMembersDynamicMembershipOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.ruleInput">RuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.rule">Rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.ruleInput"></a>

```csharp
public string RuleInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.rule"></a>

```csharp
public string Rule { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.internalValue"></a>

```csharp
public GroupWithoutMembersDynamicMembership InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a>

---


### GroupWithoutMembersTimeoutsOutputReference <a name="GroupWithoutMembersTimeoutsOutputReference" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new GroupWithoutMembersTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroupWithoutMembersTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a>

---



