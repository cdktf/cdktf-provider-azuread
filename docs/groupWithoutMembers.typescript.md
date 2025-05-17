# `groupWithoutMembers` Submodule <a name="`groupWithoutMembers` Submodule" id="@cdktf/provider-azuread.groupWithoutMembers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupWithoutMembers <a name="GroupWithoutMembers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members azuread_group_without_members}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer"></a>

```typescript
import { groupWithoutMembers } from '@cdktf/provider-azuread'

new groupWithoutMembers.GroupWithoutMembers(scope: Construct, id: string, config: GroupWithoutMembersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig">GroupWithoutMembersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig">GroupWithoutMembersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putDynamicMembership">putDynamicMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAdministrativeUnitIds">resetAdministrativeUnitIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAssignableToRole">resetAssignableToRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAutoSubscribeNewMembers">resetAutoSubscribeNewMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetBehaviors">resetBehaviors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetDynamicMembership">resetDynamicMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetExternalSendersAllowed">resetExternalSendersAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetHideFromAddressLists">resetHideFromAddressLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetHideFromOutlookClients">resetHideFromOutlookClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetMailEnabled">resetMailEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetMailNickname">resetMailNickname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOnpremisesGroupType">resetOnpremisesGroupType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOwners">resetOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetPreventDuplicateNames">resetPreventDuplicateNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetProvisioningOptions">resetProvisioningOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetSecurityEnabled">resetSecurityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTheme">resetTheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTypes">resetTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetVisibility">resetVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetWritebackEnabled">resetWritebackEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDynamicMembership` <a name="putDynamicMembership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putDynamicMembership"></a>

```typescript
public putDynamicMembership(value: GroupWithoutMembersDynamicMembership): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putDynamicMembership.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putTimeouts"></a>

```typescript
public putTimeouts(value: GroupWithoutMembersTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a>

---

##### `resetAdministrativeUnitIds` <a name="resetAdministrativeUnitIds" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAdministrativeUnitIds"></a>

```typescript
public resetAdministrativeUnitIds(): void
```

##### `resetAssignableToRole` <a name="resetAssignableToRole" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAssignableToRole"></a>

```typescript
public resetAssignableToRole(): void
```

##### `resetAutoSubscribeNewMembers` <a name="resetAutoSubscribeNewMembers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAutoSubscribeNewMembers"></a>

```typescript
public resetAutoSubscribeNewMembers(): void
```

##### `resetBehaviors` <a name="resetBehaviors" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetBehaviors"></a>

```typescript
public resetBehaviors(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDynamicMembership` <a name="resetDynamicMembership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetDynamicMembership"></a>

```typescript
public resetDynamicMembership(): void
```

##### `resetExternalSendersAllowed` <a name="resetExternalSendersAllowed" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetExternalSendersAllowed"></a>

```typescript
public resetExternalSendersAllowed(): void
```

##### `resetHideFromAddressLists` <a name="resetHideFromAddressLists" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetHideFromAddressLists"></a>

```typescript
public resetHideFromAddressLists(): void
```

##### `resetHideFromOutlookClients` <a name="resetHideFromOutlookClients" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetHideFromOutlookClients"></a>

```typescript
public resetHideFromOutlookClients(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMailEnabled` <a name="resetMailEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetMailEnabled"></a>

```typescript
public resetMailEnabled(): void
```

##### `resetMailNickname` <a name="resetMailNickname" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetMailNickname"></a>

```typescript
public resetMailNickname(): void
```

##### `resetOnpremisesGroupType` <a name="resetOnpremisesGroupType" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOnpremisesGroupType"></a>

```typescript
public resetOnpremisesGroupType(): void
```

##### `resetOwners` <a name="resetOwners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOwners"></a>

```typescript
public resetOwners(): void
```

##### `resetPreventDuplicateNames` <a name="resetPreventDuplicateNames" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetPreventDuplicateNames"></a>

```typescript
public resetPreventDuplicateNames(): void
```

##### `resetProvisioningOptions` <a name="resetProvisioningOptions" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetProvisioningOptions"></a>

```typescript
public resetProvisioningOptions(): void
```

##### `resetSecurityEnabled` <a name="resetSecurityEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetSecurityEnabled"></a>

```typescript
public resetSecurityEnabled(): void
```

##### `resetTheme` <a name="resetTheme" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTheme"></a>

```typescript
public resetTheme(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTypes` <a name="resetTypes" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTypes"></a>

```typescript
public resetTypes(): void
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetVisibility"></a>

```typescript
public resetVisibility(): void
```

##### `resetWritebackEnabled` <a name="resetWritebackEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetWritebackEnabled"></a>

```typescript
public resetWritebackEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GroupWithoutMembers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isConstruct"></a>

```typescript
import { groupWithoutMembers } from '@cdktf/provider-azuread'

groupWithoutMembers.GroupWithoutMembers.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformElement"></a>

```typescript
import { groupWithoutMembers } from '@cdktf/provider-azuread'

groupWithoutMembers.GroupWithoutMembers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformResource"></a>

```typescript
import { groupWithoutMembers } from '@cdktf/provider-azuread'

groupWithoutMembers.GroupWithoutMembers.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport"></a>

```typescript
import { groupWithoutMembers } from '@cdktf/provider-azuread'

groupWithoutMembers.GroupWithoutMembers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GroupWithoutMembers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GroupWithoutMembers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GroupWithoutMembers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GroupWithoutMembers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dynamicMembership">dynamicMembership</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference">GroupWithoutMembersDynamicMembershipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mail">mail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesDomainName">onpremisesDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesNetbiosName">onpremisesNetbiosName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSamAccountName">onpremisesSamAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSecurityIdentifier">onpremisesSecurityIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSyncEnabled">onpremisesSyncEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.proxyAddresses">proxyAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference">GroupWithoutMembersTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.administrativeUnitIdsInput">administrativeUnitIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.assignableToRoleInput">assignableToRoleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.autoSubscribeNewMembersInput">autoSubscribeNewMembersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.behaviorsInput">behaviorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dynamicMembershipInput">dynamicMembershipInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.externalSendersAllowedInput">externalSendersAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromAddressListsInput">hideFromAddressListsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromOutlookClientsInput">hideFromOutlookClientsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailEnabledInput">mailEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailNicknameInput">mailNicknameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesGroupTypeInput">onpremisesGroupTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.ownersInput">ownersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preventDuplicateNamesInput">preventDuplicateNamesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioningOptionsInput">provisioningOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.securityEnabledInput">securityEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.themeInput">themeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.typesInput">typesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.visibilityInput">visibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.writebackEnabledInput">writebackEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.administrativeUnitIds">administrativeUnitIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.assignableToRole">assignableToRole</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.autoSubscribeNewMembers">autoSubscribeNewMembers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.behaviors">behaviors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.externalSendersAllowed">externalSendersAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromAddressLists">hideFromAddressLists</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromOutlookClients">hideFromOutlookClients</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailEnabled">mailEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailNickname">mailNickname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesGroupType">onpremisesGroupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.owners">owners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preventDuplicateNames">preventDuplicateNames</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioningOptions">provisioningOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.securityEnabled">securityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.theme">theme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.types">types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.writebackEnabled">writebackEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dynamicMembership`<sup>Required</sup> <a name="dynamicMembership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dynamicMembership"></a>

```typescript
public readonly dynamicMembership: GroupWithoutMembersDynamicMembershipOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference">GroupWithoutMembersDynamicMembershipOutputReference</a>

---

##### `mail`<sup>Required</sup> <a name="mail" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mail"></a>

```typescript
public readonly mail: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `onpremisesDomainName`<sup>Required</sup> <a name="onpremisesDomainName" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesDomainName"></a>

```typescript
public readonly onpremisesDomainName: string;
```

- *Type:* string

---

##### `onpremisesNetbiosName`<sup>Required</sup> <a name="onpremisesNetbiosName" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesNetbiosName"></a>

```typescript
public readonly onpremisesNetbiosName: string;
```

- *Type:* string

---

##### `onpremisesSamAccountName`<sup>Required</sup> <a name="onpremisesSamAccountName" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSamAccountName"></a>

```typescript
public readonly onpremisesSamAccountName: string;
```

- *Type:* string

---

##### `onpremisesSecurityIdentifier`<sup>Required</sup> <a name="onpremisesSecurityIdentifier" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSecurityIdentifier"></a>

```typescript
public readonly onpremisesSecurityIdentifier: string;
```

- *Type:* string

---

##### `onpremisesSyncEnabled`<sup>Required</sup> <a name="onpremisesSyncEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSyncEnabled"></a>

```typescript
public readonly onpremisesSyncEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

---

##### `proxyAddresses`<sup>Required</sup> <a name="proxyAddresses" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.proxyAddresses"></a>

```typescript
public readonly proxyAddresses: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.timeouts"></a>

```typescript
public readonly timeouts: GroupWithoutMembersTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference">GroupWithoutMembersTimeoutsOutputReference</a>

---

##### `administrativeUnitIdsInput`<sup>Optional</sup> <a name="administrativeUnitIdsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.administrativeUnitIdsInput"></a>

```typescript
public readonly administrativeUnitIdsInput: string[];
```

- *Type:* string[]

---

##### `assignableToRoleInput`<sup>Optional</sup> <a name="assignableToRoleInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.assignableToRoleInput"></a>

```typescript
public readonly assignableToRoleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoSubscribeNewMembersInput`<sup>Optional</sup> <a name="autoSubscribeNewMembersInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.autoSubscribeNewMembersInput"></a>

```typescript
public readonly autoSubscribeNewMembersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `behaviorsInput`<sup>Optional</sup> <a name="behaviorsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.behaviorsInput"></a>

```typescript
public readonly behaviorsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `dynamicMembershipInput`<sup>Optional</sup> <a name="dynamicMembershipInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dynamicMembershipInput"></a>

```typescript
public readonly dynamicMembershipInput: GroupWithoutMembersDynamicMembership;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a>

---

##### `externalSendersAllowedInput`<sup>Optional</sup> <a name="externalSendersAllowedInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.externalSendersAllowedInput"></a>

```typescript
public readonly externalSendersAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideFromAddressListsInput`<sup>Optional</sup> <a name="hideFromAddressListsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromAddressListsInput"></a>

```typescript
public readonly hideFromAddressListsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideFromOutlookClientsInput`<sup>Optional</sup> <a name="hideFromOutlookClientsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromOutlookClientsInput"></a>

```typescript
public readonly hideFromOutlookClientsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mailEnabledInput`<sup>Optional</sup> <a name="mailEnabledInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailEnabledInput"></a>

```typescript
public readonly mailEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mailNicknameInput`<sup>Optional</sup> <a name="mailNicknameInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailNicknameInput"></a>

```typescript
public readonly mailNicknameInput: string;
```

- *Type:* string

---

##### `onpremisesGroupTypeInput`<sup>Optional</sup> <a name="onpremisesGroupTypeInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesGroupTypeInput"></a>

```typescript
public readonly onpremisesGroupTypeInput: string;
```

- *Type:* string

---

##### `ownersInput`<sup>Optional</sup> <a name="ownersInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.ownersInput"></a>

```typescript
public readonly ownersInput: string[];
```

- *Type:* string[]

---

##### `preventDuplicateNamesInput`<sup>Optional</sup> <a name="preventDuplicateNamesInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preventDuplicateNamesInput"></a>

```typescript
public readonly preventDuplicateNamesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `provisioningOptionsInput`<sup>Optional</sup> <a name="provisioningOptionsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioningOptionsInput"></a>

```typescript
public readonly provisioningOptionsInput: string[];
```

- *Type:* string[]

---

##### `securityEnabledInput`<sup>Optional</sup> <a name="securityEnabledInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.securityEnabledInput"></a>

```typescript
public readonly securityEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `themeInput`<sup>Optional</sup> <a name="themeInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.themeInput"></a>

```typescript
public readonly themeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GroupWithoutMembersTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a>

---

##### `typesInput`<sup>Optional</sup> <a name="typesInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.typesInput"></a>

```typescript
public readonly typesInput: string[];
```

- *Type:* string[]

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* string

---

##### `writebackEnabledInput`<sup>Optional</sup> <a name="writebackEnabledInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.writebackEnabledInput"></a>

```typescript
public readonly writebackEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `administrativeUnitIds`<sup>Required</sup> <a name="administrativeUnitIds" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.administrativeUnitIds"></a>

```typescript
public readonly administrativeUnitIds: string[];
```

- *Type:* string[]

---

##### `assignableToRole`<sup>Required</sup> <a name="assignableToRole" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.assignableToRole"></a>

```typescript
public readonly assignableToRole: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoSubscribeNewMembers`<sup>Required</sup> <a name="autoSubscribeNewMembers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.autoSubscribeNewMembers"></a>

```typescript
public readonly autoSubscribeNewMembers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `behaviors`<sup>Required</sup> <a name="behaviors" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.behaviors"></a>

```typescript
public readonly behaviors: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalSendersAllowed`<sup>Required</sup> <a name="externalSendersAllowed" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.externalSendersAllowed"></a>

```typescript
public readonly externalSendersAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideFromAddressLists`<sup>Required</sup> <a name="hideFromAddressLists" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromAddressLists"></a>

```typescript
public readonly hideFromAddressLists: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideFromOutlookClients`<sup>Required</sup> <a name="hideFromOutlookClients" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromOutlookClients"></a>

```typescript
public readonly hideFromOutlookClients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mailEnabled`<sup>Required</sup> <a name="mailEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailEnabled"></a>

```typescript
public readonly mailEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mailNickname`<sup>Required</sup> <a name="mailNickname" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailNickname"></a>

```typescript
public readonly mailNickname: string;
```

- *Type:* string

---

##### `onpremisesGroupType`<sup>Required</sup> <a name="onpremisesGroupType" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesGroupType"></a>

```typescript
public readonly onpremisesGroupType: string;
```

- *Type:* string

---

##### `owners`<sup>Required</sup> <a name="owners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* string[]

---

##### `preventDuplicateNames`<sup>Required</sup> <a name="preventDuplicateNames" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preventDuplicateNames"></a>

```typescript
public readonly preventDuplicateNames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `provisioningOptions`<sup>Required</sup> <a name="provisioningOptions" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioningOptions"></a>

```typescript
public readonly provisioningOptions: string[];
```

- *Type:* string[]

---

##### `securityEnabled`<sup>Required</sup> <a name="securityEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.securityEnabled"></a>

```typescript
public readonly securityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.theme"></a>

```typescript
public readonly theme: string;
```

- *Type:* string

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

##### `writebackEnabled`<sup>Required</sup> <a name="writebackEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.writebackEnabled"></a>

```typescript
public readonly writebackEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupWithoutMembersConfig <a name="GroupWithoutMembersConfig" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.Initializer"></a>

```typescript
import { groupWithoutMembers } from '@cdktf/provider-azuread'

const groupWithoutMembersConfig: groupWithoutMembers.GroupWithoutMembersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name for the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.administrativeUnitIds">administrativeUnitIds</a></code> | <code>string[]</code> | The administrative unit IDs in which the group should be. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.assignableToRole">assignableToRole</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether this group can be assigned to an Azure Active Directory role. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.autoSubscribeNewMembers">autoSubscribeNewMembers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether new members added to the group will be auto-subscribed to receive email notifications. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.behaviors">behaviors</a></code> | <code>string[]</code> | The group behaviours for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.description">description</a></code> | <code>string</code> | The description for the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.dynamicMembership">dynamicMembership</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a></code> | dynamic_membership block. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.externalSendersAllowed">externalSendersAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether people external to the organization can send messages to the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.hideFromAddressLists">hideFromAddressLists</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the group is displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.hideFromOutlookClients">hideFromOutlookClients</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the group is displayed in Outlook clients, such as Outlook for Windows and Outlook on the web. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#id GroupWithoutMembers#id}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.mailEnabled">mailEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the group is a mail enabled, with a shared group mailbox. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.mailNickname">mailNickname</a></code> | <code>string</code> | The mail alias for the group, unique in the organisation. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.onpremisesGroupType">onpremisesGroupType</a></code> | <code>string</code> | Indicates the target on-premise group type the group will be written back as. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.owners">owners</a></code> | <code>string[]</code> | A set of owners who own this group. Supported object types are Users or Service Principals. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.preventDuplicateNames">preventDuplicateNames</a></code> | <code>boolean \| cdktf.IResolvable</code> | If `true`, will return an error if an existing group is found with the same name. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provisioningOptions">provisioningOptions</a></code> | <code>string[]</code> | The group provisioning options for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.securityEnabled">securityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the group is a security group for controlling access to in-app resources. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.theme">theme</a></code> | <code>string</code> | The colour theme for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.types">types</a></code> | <code>string[]</code> | A set of group types to configure for the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.visibility">visibility</a></code> | <code>string</code> | Specifies the group join policy and group content visibility. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.writebackEnabled">writebackEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this group should be synced from Azure AD to the on-premises directory when Azure AD Connect is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#display_name GroupWithoutMembers#display_name}

---

##### `administrativeUnitIds`<sup>Optional</sup> <a name="administrativeUnitIds" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.administrativeUnitIds"></a>

```typescript
public readonly administrativeUnitIds: string[];
```

- *Type:* string[]

The administrative unit IDs in which the group should be.

If empty, the group will be created at the tenant level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#administrative_unit_ids GroupWithoutMembers#administrative_unit_ids}

---

##### `assignableToRole`<sup>Optional</sup> <a name="assignableToRole" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.assignableToRole"></a>

```typescript
public readonly assignableToRole: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether this group can be assigned to an Azure Active Directory role.

This property can only be `true` for security-enabled groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#assignable_to_role GroupWithoutMembers#assignable_to_role}

---

##### `autoSubscribeNewMembers`<sup>Optional</sup> <a name="autoSubscribeNewMembers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.autoSubscribeNewMembers"></a>

```typescript
public readonly autoSubscribeNewMembers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether new members added to the group will be auto-subscribed to receive email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#auto_subscribe_new_members GroupWithoutMembers#auto_subscribe_new_members}

---

##### `behaviors`<sup>Optional</sup> <a name="behaviors" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.behaviors"></a>

```typescript
public readonly behaviors: string[];
```

- *Type:* string[]

The group behaviours for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#behaviors GroupWithoutMembers#behaviors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#description GroupWithoutMembers#description}

---

##### `dynamicMembership`<sup>Optional</sup> <a name="dynamicMembership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.dynamicMembership"></a>

```typescript
public readonly dynamicMembership: GroupWithoutMembersDynamicMembership;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a>

dynamic_membership block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#dynamic_membership GroupWithoutMembers#dynamic_membership}

---

##### `externalSendersAllowed`<sup>Optional</sup> <a name="externalSendersAllowed" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.externalSendersAllowed"></a>

```typescript
public readonly externalSendersAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether people external to the organization can send messages to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#external_senders_allowed GroupWithoutMembers#external_senders_allowed}

---

##### `hideFromAddressLists`<sup>Optional</sup> <a name="hideFromAddressLists" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.hideFromAddressLists"></a>

```typescript
public readonly hideFromAddressLists: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the group is displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#hide_from_address_lists GroupWithoutMembers#hide_from_address_lists}

---

##### `hideFromOutlookClients`<sup>Optional</sup> <a name="hideFromOutlookClients" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.hideFromOutlookClients"></a>

```typescript
public readonly hideFromOutlookClients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the group is displayed in Outlook clients, such as Outlook for Windows and Outlook on the web.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#hide_from_outlook_clients GroupWithoutMembers#hide_from_outlook_clients}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#id GroupWithoutMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mailEnabled`<sup>Optional</sup> <a name="mailEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.mailEnabled"></a>

```typescript
public readonly mailEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the group is a mail enabled, with a shared group mailbox.

At least one of `mail_enabled` or `security_enabled` must be specified. A group can be mail enabled _and_ security enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#mail_enabled GroupWithoutMembers#mail_enabled}

---

##### `mailNickname`<sup>Optional</sup> <a name="mailNickname" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.mailNickname"></a>

```typescript
public readonly mailNickname: string;
```

- *Type:* string

The mail alias for the group, unique in the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#mail_nickname GroupWithoutMembers#mail_nickname}

---

##### `onpremisesGroupType`<sup>Optional</sup> <a name="onpremisesGroupType" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.onpremisesGroupType"></a>

```typescript
public readonly onpremisesGroupType: string;
```

- *Type:* string

Indicates the target on-premise group type the group will be written back as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#onpremises_group_type GroupWithoutMembers#onpremises_group_type}

---

##### `owners`<sup>Optional</sup> <a name="owners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* string[]

A set of owners who own this group. Supported object types are Users or Service Principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#owners GroupWithoutMembers#owners}

---

##### `preventDuplicateNames`<sup>Optional</sup> <a name="preventDuplicateNames" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.preventDuplicateNames"></a>

```typescript
public readonly preventDuplicateNames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If `true`, will return an error if an existing group is found with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#prevent_duplicate_names GroupWithoutMembers#prevent_duplicate_names}

---

##### `provisioningOptions`<sup>Optional</sup> <a name="provisioningOptions" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provisioningOptions"></a>

```typescript
public readonly provisioningOptions: string[];
```

- *Type:* string[]

The group provisioning options for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#provisioning_options GroupWithoutMembers#provisioning_options}

---

##### `securityEnabled`<sup>Optional</sup> <a name="securityEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.securityEnabled"></a>

```typescript
public readonly securityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the group is a security group for controlling access to in-app resources.

At least one of `security_enabled` or `mail_enabled` must be specified. A group can be security enabled _and_ mail enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#security_enabled GroupWithoutMembers#security_enabled}

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.theme"></a>

```typescript
public readonly theme: string;
```

- *Type:* string

The colour theme for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#theme GroupWithoutMembers#theme}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GroupWithoutMembersTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#timeouts GroupWithoutMembers#timeouts}

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

A set of group types to configure for the group.

`Unified` specifies a Microsoft 365 group. Required when `mail_enabled` is true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#types GroupWithoutMembers#types}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

Specifies the group join policy and group content visibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#visibility GroupWithoutMembers#visibility}

---

##### `writebackEnabled`<sup>Optional</sup> <a name="writebackEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.writebackEnabled"></a>

```typescript
public readonly writebackEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this group should be synced from Azure AD to the on-premises directory when Azure AD Connect is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#writeback_enabled GroupWithoutMembers#writeback_enabled}

---

### GroupWithoutMembersDynamicMembership <a name="GroupWithoutMembersDynamicMembership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.Initializer"></a>

```typescript
import { groupWithoutMembers } from '@cdktf/provider-azuread'

const groupWithoutMembersDynamicMembership: groupWithoutMembers.GroupWithoutMembersDynamicMembership = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#enabled GroupWithoutMembers#enabled}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.property.rule">rule</a></code> | <code>string</code> | Rule to determine members for a dynamic group. Required when `group_types` contains 'DynamicMembership'. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#enabled GroupWithoutMembers#enabled}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

Rule to determine members for a dynamic group. Required when `group_types` contains 'DynamicMembership'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#rule GroupWithoutMembers#rule}

---

### GroupWithoutMembersTimeouts <a name="GroupWithoutMembersTimeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.Initializer"></a>

```typescript
import { groupWithoutMembers } from '@cdktf/provider-azuread'

const groupWithoutMembersTimeouts: groupWithoutMembers.GroupWithoutMembersTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#create GroupWithoutMembers#create}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#delete GroupWithoutMembers#delete}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#read GroupWithoutMembers#read}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#update GroupWithoutMembers#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#create GroupWithoutMembers#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#delete GroupWithoutMembers#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#read GroupWithoutMembers#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#update GroupWithoutMembers#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroupWithoutMembersDynamicMembershipOutputReference <a name="GroupWithoutMembersDynamicMembershipOutputReference" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer"></a>

```typescript
import { groupWithoutMembers } from '@cdktf/provider-azuread'

new groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.ruleInput">ruleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.rule">rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroupWithoutMembersDynamicMembership;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a>

---


### GroupWithoutMembersTimeoutsOutputReference <a name="GroupWithoutMembersTimeoutsOutputReference" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer"></a>

```typescript
import { groupWithoutMembers } from '@cdktf/provider-azuread'

new groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroupWithoutMembersTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a>

---



