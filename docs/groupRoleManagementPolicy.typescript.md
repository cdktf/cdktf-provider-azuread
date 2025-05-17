# `groupRoleManagementPolicy` Submodule <a name="`groupRoleManagementPolicy` Submodule" id="@cdktf/provider-azuread.groupRoleManagementPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupRoleManagementPolicy <a name="GroupRoleManagementPolicy" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy azuread_group_role_management_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

new groupRoleManagementPolicy.GroupRoleManagementPolicy(scope: Construct, id: string, config: GroupRoleManagementPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig">GroupRoleManagementPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig">GroupRoleManagementPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActivationRules">putActivationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActiveAssignmentRules">putActiveAssignmentRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putEligibleAssignmentRules">putEligibleAssignmentRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putNotificationRules">putNotificationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetActivationRules">resetActivationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetActiveAssignmentRules">resetActiveAssignmentRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetEligibleAssignmentRules">resetEligibleAssignmentRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetNotificationRules">resetNotificationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActivationRules` <a name="putActivationRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActivationRules"></a>

```typescript
public putActivationRules(value: GroupRoleManagementPolicyActivationRules): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActivationRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules">GroupRoleManagementPolicyActivationRules</a>

---

##### `putActiveAssignmentRules` <a name="putActiveAssignmentRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActiveAssignmentRules"></a>

```typescript
public putActiveAssignmentRules(value: GroupRoleManagementPolicyActiveAssignmentRules): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putActiveAssignmentRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules">GroupRoleManagementPolicyActiveAssignmentRules</a>

---

##### `putEligibleAssignmentRules` <a name="putEligibleAssignmentRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putEligibleAssignmentRules"></a>

```typescript
public putEligibleAssignmentRules(value: GroupRoleManagementPolicyEligibleAssignmentRules): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putEligibleAssignmentRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules">GroupRoleManagementPolicyEligibleAssignmentRules</a>

---

##### `putNotificationRules` <a name="putNotificationRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putNotificationRules"></a>

```typescript
public putNotificationRules(value: GroupRoleManagementPolicyNotificationRules): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putNotificationRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules">GroupRoleManagementPolicyNotificationRules</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GroupRoleManagementPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts">GroupRoleManagementPolicyTimeouts</a>

---

##### `resetActivationRules` <a name="resetActivationRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetActivationRules"></a>

```typescript
public resetActivationRules(): void
```

##### `resetActiveAssignmentRules` <a name="resetActiveAssignmentRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetActiveAssignmentRules"></a>

```typescript
public resetActiveAssignmentRules(): void
```

##### `resetEligibleAssignmentRules` <a name="resetEligibleAssignmentRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetEligibleAssignmentRules"></a>

```typescript
public resetEligibleAssignmentRules(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNotificationRules` <a name="resetNotificationRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetNotificationRules"></a>

```typescript
public resetNotificationRules(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GroupRoleManagementPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isConstruct"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

groupRoleManagementPolicy.GroupRoleManagementPolicy.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isTerraformElement"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

groupRoleManagementPolicy.GroupRoleManagementPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isTerraformResource"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

groupRoleManagementPolicy.GroupRoleManagementPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.generateConfigForImport"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

groupRoleManagementPolicy.GroupRoleManagementPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GroupRoleManagementPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GroupRoleManagementPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GroupRoleManagementPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GroupRoleManagementPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activationRules">activationRules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference">GroupRoleManagementPolicyActivationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activeAssignmentRules">activeAssignmentRules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference">GroupRoleManagementPolicyActiveAssignmentRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.eligibleAssignmentRules">eligibleAssignmentRules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference">GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.notificationRules">notificationRules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference">GroupRoleManagementPolicyNotificationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference">GroupRoleManagementPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activationRulesInput">activationRulesInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules">GroupRoleManagementPolicyActivationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activeAssignmentRulesInput">activeAssignmentRulesInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules">GroupRoleManagementPolicyActiveAssignmentRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.eligibleAssignmentRulesInput">eligibleAssignmentRulesInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules">GroupRoleManagementPolicyEligibleAssignmentRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.notificationRulesInput">notificationRulesInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules">GroupRoleManagementPolicyNotificationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.roleIdInput">roleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts">GroupRoleManagementPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `activationRules`<sup>Required</sup> <a name="activationRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activationRules"></a>

```typescript
public readonly activationRules: GroupRoleManagementPolicyActivationRulesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference">GroupRoleManagementPolicyActivationRulesOutputReference</a>

---

##### `activeAssignmentRules`<sup>Required</sup> <a name="activeAssignmentRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activeAssignmentRules"></a>

```typescript
public readonly activeAssignmentRules: GroupRoleManagementPolicyActiveAssignmentRulesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference">GroupRoleManagementPolicyActiveAssignmentRulesOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `eligibleAssignmentRules`<sup>Required</sup> <a name="eligibleAssignmentRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.eligibleAssignmentRules"></a>

```typescript
public readonly eligibleAssignmentRules: GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference">GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference</a>

---

##### `notificationRules`<sup>Required</sup> <a name="notificationRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.notificationRules"></a>

```typescript
public readonly notificationRules: GroupRoleManagementPolicyNotificationRulesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference">GroupRoleManagementPolicyNotificationRulesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GroupRoleManagementPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference">GroupRoleManagementPolicyTimeoutsOutputReference</a>

---

##### `activationRulesInput`<sup>Optional</sup> <a name="activationRulesInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activationRulesInput"></a>

```typescript
public readonly activationRulesInput: GroupRoleManagementPolicyActivationRules;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules">GroupRoleManagementPolicyActivationRules</a>

---

##### `activeAssignmentRulesInput`<sup>Optional</sup> <a name="activeAssignmentRulesInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.activeAssignmentRulesInput"></a>

```typescript
public readonly activeAssignmentRulesInput: GroupRoleManagementPolicyActiveAssignmentRules;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules">GroupRoleManagementPolicyActiveAssignmentRules</a>

---

##### `eligibleAssignmentRulesInput`<sup>Optional</sup> <a name="eligibleAssignmentRulesInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.eligibleAssignmentRulesInput"></a>

```typescript
public readonly eligibleAssignmentRulesInput: GroupRoleManagementPolicyEligibleAssignmentRules;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules">GroupRoleManagementPolicyEligibleAssignmentRules</a>

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `notificationRulesInput`<sup>Optional</sup> <a name="notificationRulesInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.notificationRulesInput"></a>

```typescript
public readonly notificationRulesInput: GroupRoleManagementPolicyNotificationRules;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules">GroupRoleManagementPolicyNotificationRules</a>

---

##### `roleIdInput`<sup>Optional</sup> <a name="roleIdInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.roleIdInput"></a>

```typescript
public readonly roleIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GroupRoleManagementPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts">GroupRoleManagementPolicyTimeouts</a>

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupRoleManagementPolicyActivationRules <a name="GroupRoleManagementPolicyActivationRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

const groupRoleManagementPolicyActivationRules: groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.approvalStage">approvalStage</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage">GroupRoleManagementPolicyActivationRulesApprovalStage</a></code> | approval_stage block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.maximumDuration">maximumDuration</a></code> | <code>string</code> | The time after which the an activation can be valid for. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireApproval">requireApproval</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether an approval is required for activation. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requiredConditionalAccessAuthenticationContext">requiredConditionalAccessAuthenticationContext</a></code> | <code>string</code> | Whether a conditional access context is required during activation. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireJustification">requireJustification</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether a justification is required during activation. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireMultifactorAuthentication">requireMultifactorAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether multi-factor authentication is required during activation. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireTicketInfo">requireTicketInfo</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether ticket information is required during activation. |

---

##### `approvalStage`<sup>Optional</sup> <a name="approvalStage" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.approvalStage"></a>

```typescript
public readonly approvalStage: GroupRoleManagementPolicyActivationRulesApprovalStage;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage">GroupRoleManagementPolicyActivationRulesApprovalStage</a>

approval_stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#approval_stage GroupRoleManagementPolicy#approval_stage}

---

##### `maximumDuration`<sup>Optional</sup> <a name="maximumDuration" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.maximumDuration"></a>

```typescript
public readonly maximumDuration: string;
```

- *Type:* string

The time after which the an activation can be valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#maximum_duration GroupRoleManagementPolicy#maximum_duration}

---

##### `requireApproval`<sup>Optional</sup> <a name="requireApproval" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireApproval"></a>

```typescript
public readonly requireApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether an approval is required for activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#require_approval GroupRoleManagementPolicy#require_approval}

---

##### `requiredConditionalAccessAuthenticationContext`<sup>Optional</sup> <a name="requiredConditionalAccessAuthenticationContext" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requiredConditionalAccessAuthenticationContext"></a>

```typescript
public readonly requiredConditionalAccessAuthenticationContext: string;
```

- *Type:* string

Whether a conditional access context is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#required_conditional_access_authentication_context GroupRoleManagementPolicy#required_conditional_access_authentication_context}

---

##### `requireJustification`<sup>Optional</sup> <a name="requireJustification" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireJustification"></a>

```typescript
public readonly requireJustification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether a justification is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#require_justification GroupRoleManagementPolicy#require_justification}

---

##### `requireMultifactorAuthentication`<sup>Optional</sup> <a name="requireMultifactorAuthentication" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireMultifactorAuthentication"></a>

```typescript
public readonly requireMultifactorAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether multi-factor authentication is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#require_multifactor_authentication GroupRoleManagementPolicy#require_multifactor_authentication}

---

##### `requireTicketInfo`<sup>Optional</sup> <a name="requireTicketInfo" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules.property.requireTicketInfo"></a>

```typescript
public readonly requireTicketInfo: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether ticket information is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#require_ticket_info GroupRoleManagementPolicy#require_ticket_info}

---

### GroupRoleManagementPolicyActivationRulesApprovalStage <a name="GroupRoleManagementPolicyActivationRulesApprovalStage" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

const groupRoleManagementPolicyActivationRulesApprovalStage: groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage.property.primaryApprover">primaryApprover</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>[]</code> | primary_approver block. |

---

##### `primaryApprover`<sup>Required</sup> <a name="primaryApprover" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage.property.primaryApprover"></a>

```typescript
public readonly primaryApprover: IResolvable | GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>[]

primary_approver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#primary_approver GroupRoleManagementPolicy#primary_approver}

---

### GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover <a name="GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

const groupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover: groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.property.objectId">objectId</a></code> | <code>string</code> | The ID of the object to act as an approver. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.property.type">type</a></code> | <code>string</code> | The type of object acting as an approver. |

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

The ID of the object to act as an approver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#object_id GroupRoleManagementPolicy#object_id}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of object acting as an approver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#type GroupRoleManagementPolicy#type}

---

### GroupRoleManagementPolicyActiveAssignmentRules <a name="GroupRoleManagementPolicyActiveAssignmentRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

const groupRoleManagementPolicyActiveAssignmentRules: groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.expirationRequired">expirationRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Must the assignment have an expiry date. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.expireAfter">expireAfter</a></code> | <code>string</code> | The duration after which assignments expire. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.requireJustification">requireJustification</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether a justification is required to make an assignment. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.requireMultifactorAuthentication">requireMultifactorAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether multi-factor authentication is required to make an assignment. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.requireTicketInfo">requireTicketInfo</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether ticket information is required to make an assignment. |

---

##### `expirationRequired`<sup>Optional</sup> <a name="expirationRequired" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.expirationRequired"></a>

```typescript
public readonly expirationRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Must the assignment have an expiry date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#expiration_required GroupRoleManagementPolicy#expiration_required}

---

##### `expireAfter`<sup>Optional</sup> <a name="expireAfter" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.expireAfter"></a>

```typescript
public readonly expireAfter: string;
```

- *Type:* string

The duration after which assignments expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#expire_after GroupRoleManagementPolicy#expire_after}

---

##### `requireJustification`<sup>Optional</sup> <a name="requireJustification" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.requireJustification"></a>

```typescript
public readonly requireJustification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether a justification is required to make an assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#require_justification GroupRoleManagementPolicy#require_justification}

---

##### `requireMultifactorAuthentication`<sup>Optional</sup> <a name="requireMultifactorAuthentication" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.requireMultifactorAuthentication"></a>

```typescript
public readonly requireMultifactorAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether multi-factor authentication is required to make an assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#require_multifactor_authentication GroupRoleManagementPolicy#require_multifactor_authentication}

---

##### `requireTicketInfo`<sup>Optional</sup> <a name="requireTicketInfo" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules.property.requireTicketInfo"></a>

```typescript
public readonly requireTicketInfo: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether ticket information is required to make an assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#require_ticket_info GroupRoleManagementPolicy#require_ticket_info}

---

### GroupRoleManagementPolicyConfig <a name="GroupRoleManagementPolicyConfig" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

const groupRoleManagementPolicyConfig: groupRoleManagementPolicy.GroupRoleManagementPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.groupId">groupId</a></code> | <code>string</code> | ID of the group to which this policy is assigned. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.roleId">roleId</a></code> | <code>string</code> | The ID of the role of this policy to the group. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.activationRules">activationRules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules">GroupRoleManagementPolicyActivationRules</a></code> | activation_rules block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.activeAssignmentRules">activeAssignmentRules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules">GroupRoleManagementPolicyActiveAssignmentRules</a></code> | active_assignment_rules block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.eligibleAssignmentRules">eligibleAssignmentRules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules">GroupRoleManagementPolicyEligibleAssignmentRules</a></code> | eligible_assignment_rules block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#id GroupRoleManagementPolicy#id}. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.notificationRules">notificationRules</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules">GroupRoleManagementPolicyNotificationRules</a></code> | notification_rules block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts">GroupRoleManagementPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

ID of the group to which this policy is assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#group_id GroupRoleManagementPolicy#group_id}

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

The ID of the role of this policy to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#role_id GroupRoleManagementPolicy#role_id}

---

##### `activationRules`<sup>Optional</sup> <a name="activationRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.activationRules"></a>

```typescript
public readonly activationRules: GroupRoleManagementPolicyActivationRules;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules">GroupRoleManagementPolicyActivationRules</a>

activation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#activation_rules GroupRoleManagementPolicy#activation_rules}

---

##### `activeAssignmentRules`<sup>Optional</sup> <a name="activeAssignmentRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.activeAssignmentRules"></a>

```typescript
public readonly activeAssignmentRules: GroupRoleManagementPolicyActiveAssignmentRules;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules">GroupRoleManagementPolicyActiveAssignmentRules</a>

active_assignment_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#active_assignment_rules GroupRoleManagementPolicy#active_assignment_rules}

---

##### `eligibleAssignmentRules`<sup>Optional</sup> <a name="eligibleAssignmentRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.eligibleAssignmentRules"></a>

```typescript
public readonly eligibleAssignmentRules: GroupRoleManagementPolicyEligibleAssignmentRules;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules">GroupRoleManagementPolicyEligibleAssignmentRules</a>

eligible_assignment_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#eligible_assignment_rules GroupRoleManagementPolicy#eligible_assignment_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#id GroupRoleManagementPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notificationRules`<sup>Optional</sup> <a name="notificationRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.notificationRules"></a>

```typescript
public readonly notificationRules: GroupRoleManagementPolicyNotificationRules;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules">GroupRoleManagementPolicyNotificationRules</a>

notification_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_rules GroupRoleManagementPolicy#notification_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GroupRoleManagementPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts">GroupRoleManagementPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#timeouts GroupRoleManagementPolicy#timeouts}

---

### GroupRoleManagementPolicyEligibleAssignmentRules <a name="GroupRoleManagementPolicyEligibleAssignmentRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

const groupRoleManagementPolicyEligibleAssignmentRules: groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules.property.expirationRequired">expirationRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Must the assignment have an expiry date. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules.property.expireAfter">expireAfter</a></code> | <code>string</code> | The duration after which assignments expire. |

---

##### `expirationRequired`<sup>Optional</sup> <a name="expirationRequired" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules.property.expirationRequired"></a>

```typescript
public readonly expirationRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Must the assignment have an expiry date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#expiration_required GroupRoleManagementPolicy#expiration_required}

---

##### `expireAfter`<sup>Optional</sup> <a name="expireAfter" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules.property.expireAfter"></a>

```typescript
public readonly expireAfter: string;
```

- *Type:* string

The duration after which assignments expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#expire_after GroupRoleManagementPolicy#expire_after}

---

### GroupRoleManagementPolicyNotificationRules <a name="GroupRoleManagementPolicyNotificationRules" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

const groupRoleManagementPolicyNotificationRules: groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules.property.activeAssignments">activeAssignments</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments">GroupRoleManagementPolicyNotificationRulesActiveAssignments</a></code> | active_assignments block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules.property.eligibleActivations">eligibleActivations</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations">GroupRoleManagementPolicyNotificationRulesEligibleActivations</a></code> | eligible_activations block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules.property.eligibleAssignments">eligibleAssignments</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments">GroupRoleManagementPolicyNotificationRulesEligibleAssignments</a></code> | eligible_assignments block. |

---

##### `activeAssignments`<sup>Optional</sup> <a name="activeAssignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules.property.activeAssignments"></a>

```typescript
public readonly activeAssignments: GroupRoleManagementPolicyNotificationRulesActiveAssignments;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments">GroupRoleManagementPolicyNotificationRulesActiveAssignments</a>

active_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#active_assignments GroupRoleManagementPolicy#active_assignments}

---

##### `eligibleActivations`<sup>Optional</sup> <a name="eligibleActivations" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules.property.eligibleActivations"></a>

```typescript
public readonly eligibleActivations: GroupRoleManagementPolicyNotificationRulesEligibleActivations;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations">GroupRoleManagementPolicyNotificationRulesEligibleActivations</a>

eligible_activations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#eligible_activations GroupRoleManagementPolicy#eligible_activations}

---

##### `eligibleAssignments`<sup>Optional</sup> <a name="eligibleAssignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules.property.eligibleAssignments"></a>

```typescript
public readonly eligibleAssignments: GroupRoleManagementPolicyNotificationRulesEligibleAssignments;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments">GroupRoleManagementPolicyNotificationRulesEligibleAssignments</a>

eligible_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#eligible_assignments GroupRoleManagementPolicy#eligible_assignments}

---

### GroupRoleManagementPolicyNotificationRulesActiveAssignments <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

const groupRoleManagementPolicyNotificationRulesActiveAssignments: groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments.property.adminNotifications">adminNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a></code> | admin_notifications block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments.property.approverNotifications">approverNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a></code> | approver_notifications block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments.property.assigneeNotifications">assigneeNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a></code> | assignee_notifications block. |

---

##### `adminNotifications`<sup>Optional</sup> <a name="adminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments.property.adminNotifications"></a>

```typescript
public readonly adminNotifications: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#admin_notifications GroupRoleManagementPolicy#admin_notifications}

---

##### `approverNotifications`<sup>Optional</sup> <a name="approverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments.property.approverNotifications"></a>

```typescript
public readonly approverNotifications: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#approver_notifications GroupRoleManagementPolicy#approver_notifications}

---

##### `assigneeNotifications`<sup>Optional</sup> <a name="assigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments.property.assigneeNotifications"></a>

```typescript
public readonly assigneeNotifications: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a>

assignee_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#assignee_notifications GroupRoleManagementPolicy#assignee_notifications}

---

### GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

const groupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications: groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.defaultRecipients">defaultRecipients</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | The additional recipients to notify. |

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `additionalRecipients`<sup>Optional</sup> <a name="additionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

const groupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications: groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.defaultRecipients">defaultRecipients</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | The additional recipients to notify. |

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `additionalRecipients`<sup>Optional</sup> <a name="additionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

const groupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications: groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.defaultRecipients">defaultRecipients</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | The additional recipients to notify. |

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `additionalRecipients`<sup>Optional</sup> <a name="additionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesEligibleActivations <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivations" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

const groupRoleManagementPolicyNotificationRulesEligibleActivations: groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations.property.adminNotifications">adminNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a></code> | admin_notifications block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations.property.approverNotifications">approverNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a></code> | approver_notifications block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations.property.assigneeNotifications">assigneeNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a></code> | assignee_notifications block. |

---

##### `adminNotifications`<sup>Optional</sup> <a name="adminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations.property.adminNotifications"></a>

```typescript
public readonly adminNotifications: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#admin_notifications GroupRoleManagementPolicy#admin_notifications}

---

##### `approverNotifications`<sup>Optional</sup> <a name="approverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations.property.approverNotifications"></a>

```typescript
public readonly approverNotifications: GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#approver_notifications GroupRoleManagementPolicy#approver_notifications}

---

##### `assigneeNotifications`<sup>Optional</sup> <a name="assigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations.property.assigneeNotifications"></a>

```typescript
public readonly assigneeNotifications: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a>

assignee_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#assignee_notifications GroupRoleManagementPolicy#assignee_notifications}

---

### GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

const groupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications: groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.defaultRecipients">defaultRecipients</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | The additional recipients to notify. |

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `additionalRecipients`<sup>Optional</sup> <a name="additionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

const groupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications: groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.defaultRecipients">defaultRecipients</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | The additional recipients to notify. |

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `additionalRecipients`<sup>Optional</sup> <a name="additionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

const groupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications: groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.defaultRecipients">defaultRecipients</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | The additional recipients to notify. |

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `additionalRecipients`<sup>Optional</sup> <a name="additionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesEligibleAssignments <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

const groupRoleManagementPolicyNotificationRulesEligibleAssignments: groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments.property.adminNotifications">adminNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a></code> | admin_notifications block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments.property.approverNotifications">approverNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a></code> | approver_notifications block. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments.property.assigneeNotifications">assigneeNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a></code> | assignee_notifications block. |

---

##### `adminNotifications`<sup>Optional</sup> <a name="adminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments.property.adminNotifications"></a>

```typescript
public readonly adminNotifications: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#admin_notifications GroupRoleManagementPolicy#admin_notifications}

---

##### `approverNotifications`<sup>Optional</sup> <a name="approverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments.property.approverNotifications"></a>

```typescript
public readonly approverNotifications: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#approver_notifications GroupRoleManagementPolicy#approver_notifications}

---

##### `assigneeNotifications`<sup>Optional</sup> <a name="assigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments.property.assigneeNotifications"></a>

```typescript
public readonly assigneeNotifications: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a>

assignee_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#assignee_notifications GroupRoleManagementPolicy#assignee_notifications}

---

### GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

const groupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications: groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.defaultRecipients">defaultRecipients</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | The additional recipients to notify. |

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `additionalRecipients`<sup>Optional</sup> <a name="additionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

const groupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications: groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.defaultRecipients">defaultRecipients</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | The additional recipients to notify. |

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `additionalRecipients`<sup>Optional</sup> <a name="additionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

const groupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications: groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.defaultRecipients">defaultRecipients</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | The additional recipients to notify. |

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#default_recipients GroupRoleManagementPolicy#default_recipients}

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#notification_level GroupRoleManagementPolicy#notification_level}

---

##### `additionalRecipients`<sup>Optional</sup> <a name="additionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#additional_recipients GroupRoleManagementPolicy#additional_recipients}

---

### GroupRoleManagementPolicyTimeouts <a name="GroupRoleManagementPolicyTimeouts" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

const groupRoleManagementPolicyTimeouts: groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#create GroupRoleManagementPolicy#create}. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#delete GroupRoleManagementPolicy#delete}. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#read GroupRoleManagementPolicy#read}. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#update GroupRoleManagementPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#create GroupRoleManagementPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#delete GroupRoleManagementPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#read GroupRoleManagementPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_role_management_policy#update GroupRoleManagementPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference <a name="GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

new groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.putPrimaryApprover">putPrimaryApprover</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrimaryApprover` <a name="putPrimaryApprover" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.putPrimaryApprover"></a>

```typescript
public putPrimaryApprover(value: IResolvable | GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.putPrimaryApprover.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.primaryApprover">primaryApprover</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.primaryApproverInput">primaryApproverInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage">GroupRoleManagementPolicyActivationRulesApprovalStage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primaryApprover`<sup>Required</sup> <a name="primaryApprover" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.primaryApprover"></a>

```typescript
public readonly primaryApprover: GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList</a>

---

##### `primaryApproverInput`<sup>Optional</sup> <a name="primaryApproverInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.primaryApproverInput"></a>

```typescript
public readonly primaryApproverInput: IResolvable | GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroupRoleManagementPolicyActivationRulesApprovalStage;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage">GroupRoleManagementPolicyActivationRulesApprovalStage</a>

---


### GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList <a name="GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

new groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.get"></a>

```typescript
public get(index: number): GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>[]

---


### GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference <a name="GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

new groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">GroupRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>

---


### GroupRoleManagementPolicyActivationRulesOutputReference <a name="GroupRoleManagementPolicyActivationRulesOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

new groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.putApprovalStage">putApprovalStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetApprovalStage">resetApprovalStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetMaximumDuration">resetMaximumDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireApproval">resetRequireApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequiredConditionalAccessAuthenticationContext">resetRequiredConditionalAccessAuthenticationContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireJustification">resetRequireJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireMultifactorAuthentication">resetRequireMultifactorAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireTicketInfo">resetRequireTicketInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApprovalStage` <a name="putApprovalStage" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.putApprovalStage"></a>

```typescript
public putApprovalStage(value: GroupRoleManagementPolicyActivationRulesApprovalStage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.putApprovalStage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage">GroupRoleManagementPolicyActivationRulesApprovalStage</a>

---

##### `resetApprovalStage` <a name="resetApprovalStage" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetApprovalStage"></a>

```typescript
public resetApprovalStage(): void
```

##### `resetMaximumDuration` <a name="resetMaximumDuration" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetMaximumDuration"></a>

```typescript
public resetMaximumDuration(): void
```

##### `resetRequireApproval` <a name="resetRequireApproval" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireApproval"></a>

```typescript
public resetRequireApproval(): void
```

##### `resetRequiredConditionalAccessAuthenticationContext` <a name="resetRequiredConditionalAccessAuthenticationContext" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequiredConditionalAccessAuthenticationContext"></a>

```typescript
public resetRequiredConditionalAccessAuthenticationContext(): void
```

##### `resetRequireJustification` <a name="resetRequireJustification" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireJustification"></a>

```typescript
public resetRequireJustification(): void
```

##### `resetRequireMultifactorAuthentication` <a name="resetRequireMultifactorAuthentication" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireMultifactorAuthentication"></a>

```typescript
public resetRequireMultifactorAuthentication(): void
```

##### `resetRequireTicketInfo` <a name="resetRequireTicketInfo" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.resetRequireTicketInfo"></a>

```typescript
public resetRequireTicketInfo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.approvalStage">approvalStage</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference">GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.approvalStageInput">approvalStageInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage">GroupRoleManagementPolicyActivationRulesApprovalStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.maximumDurationInput">maximumDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireApprovalInput">requireApprovalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requiredConditionalAccessAuthenticationContextInput">requiredConditionalAccessAuthenticationContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireJustificationInput">requireJustificationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireMultifactorAuthenticationInput">requireMultifactorAuthenticationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireTicketInfoInput">requireTicketInfoInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.maximumDuration">maximumDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireApproval">requireApproval</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requiredConditionalAccessAuthenticationContext">requiredConditionalAccessAuthenticationContext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireJustification">requireJustification</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireMultifactorAuthentication">requireMultifactorAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireTicketInfo">requireTicketInfo</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules">GroupRoleManagementPolicyActivationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approvalStage`<sup>Required</sup> <a name="approvalStage" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.approvalStage"></a>

```typescript
public readonly approvalStage: GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference">GroupRoleManagementPolicyActivationRulesApprovalStageOutputReference</a>

---

##### `approvalStageInput`<sup>Optional</sup> <a name="approvalStageInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.approvalStageInput"></a>

```typescript
public readonly approvalStageInput: GroupRoleManagementPolicyActivationRulesApprovalStage;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesApprovalStage">GroupRoleManagementPolicyActivationRulesApprovalStage</a>

---

##### `maximumDurationInput`<sup>Optional</sup> <a name="maximumDurationInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.maximumDurationInput"></a>

```typescript
public readonly maximumDurationInput: string;
```

- *Type:* string

---

##### `requireApprovalInput`<sup>Optional</sup> <a name="requireApprovalInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireApprovalInput"></a>

```typescript
public readonly requireApprovalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredConditionalAccessAuthenticationContextInput`<sup>Optional</sup> <a name="requiredConditionalAccessAuthenticationContextInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requiredConditionalAccessAuthenticationContextInput"></a>

```typescript
public readonly requiredConditionalAccessAuthenticationContextInput: string;
```

- *Type:* string

---

##### `requireJustificationInput`<sup>Optional</sup> <a name="requireJustificationInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireJustificationInput"></a>

```typescript
public readonly requireJustificationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireMultifactorAuthenticationInput`<sup>Optional</sup> <a name="requireMultifactorAuthenticationInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireMultifactorAuthenticationInput"></a>

```typescript
public readonly requireMultifactorAuthenticationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireTicketInfoInput`<sup>Optional</sup> <a name="requireTicketInfoInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireTicketInfoInput"></a>

```typescript
public readonly requireTicketInfoInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maximumDuration`<sup>Required</sup> <a name="maximumDuration" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.maximumDuration"></a>

```typescript
public readonly maximumDuration: string;
```

- *Type:* string

---

##### `requireApproval`<sup>Required</sup> <a name="requireApproval" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireApproval"></a>

```typescript
public readonly requireApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredConditionalAccessAuthenticationContext`<sup>Required</sup> <a name="requiredConditionalAccessAuthenticationContext" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requiredConditionalAccessAuthenticationContext"></a>

```typescript
public readonly requiredConditionalAccessAuthenticationContext: string;
```

- *Type:* string

---

##### `requireJustification`<sup>Required</sup> <a name="requireJustification" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireJustification"></a>

```typescript
public readonly requireJustification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireMultifactorAuthentication`<sup>Required</sup> <a name="requireMultifactorAuthentication" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireMultifactorAuthentication"></a>

```typescript
public readonly requireMultifactorAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireTicketInfo`<sup>Required</sup> <a name="requireTicketInfo" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.requireTicketInfo"></a>

```typescript
public readonly requireTicketInfo: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroupRoleManagementPolicyActivationRules;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActivationRules">GroupRoleManagementPolicyActivationRules</a>

---


### GroupRoleManagementPolicyActiveAssignmentRulesOutputReference <a name="GroupRoleManagementPolicyActiveAssignmentRulesOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

new groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetExpirationRequired">resetExpirationRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetExpireAfter">resetExpireAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireJustification">resetRequireJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireMultifactorAuthentication">resetRequireMultifactorAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireTicketInfo">resetRequireTicketInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpirationRequired` <a name="resetExpirationRequired" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetExpirationRequired"></a>

```typescript
public resetExpirationRequired(): void
```

##### `resetExpireAfter` <a name="resetExpireAfter" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetExpireAfter"></a>

```typescript
public resetExpireAfter(): void
```

##### `resetRequireJustification` <a name="resetRequireJustification" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireJustification"></a>

```typescript
public resetRequireJustification(): void
```

##### `resetRequireMultifactorAuthentication` <a name="resetRequireMultifactorAuthentication" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireMultifactorAuthentication"></a>

```typescript
public resetRequireMultifactorAuthentication(): void
```

##### `resetRequireTicketInfo` <a name="resetRequireTicketInfo" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireTicketInfo"></a>

```typescript
public resetRequireTicketInfo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expirationRequiredInput">expirationRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expireAfterInput">expireAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireJustificationInput">requireJustificationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireMultifactorAuthenticationInput">requireMultifactorAuthenticationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireTicketInfoInput">requireTicketInfoInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expirationRequired">expirationRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expireAfter">expireAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireJustification">requireJustification</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireMultifactorAuthentication">requireMultifactorAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireTicketInfo">requireTicketInfo</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules">GroupRoleManagementPolicyActiveAssignmentRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expirationRequiredInput`<sup>Optional</sup> <a name="expirationRequiredInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expirationRequiredInput"></a>

```typescript
public readonly expirationRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expireAfterInput`<sup>Optional</sup> <a name="expireAfterInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expireAfterInput"></a>

```typescript
public readonly expireAfterInput: string;
```

- *Type:* string

---

##### `requireJustificationInput`<sup>Optional</sup> <a name="requireJustificationInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireJustificationInput"></a>

```typescript
public readonly requireJustificationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireMultifactorAuthenticationInput`<sup>Optional</sup> <a name="requireMultifactorAuthenticationInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireMultifactorAuthenticationInput"></a>

```typescript
public readonly requireMultifactorAuthenticationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireTicketInfoInput`<sup>Optional</sup> <a name="requireTicketInfoInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireTicketInfoInput"></a>

```typescript
public readonly requireTicketInfoInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expirationRequired`<sup>Required</sup> <a name="expirationRequired" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expirationRequired"></a>

```typescript
public readonly expirationRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expireAfter`<sup>Required</sup> <a name="expireAfter" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expireAfter"></a>

```typescript
public readonly expireAfter: string;
```

- *Type:* string

---

##### `requireJustification`<sup>Required</sup> <a name="requireJustification" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireJustification"></a>

```typescript
public readonly requireJustification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireMultifactorAuthentication`<sup>Required</sup> <a name="requireMultifactorAuthentication" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireMultifactorAuthentication"></a>

```typescript
public readonly requireMultifactorAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireTicketInfo`<sup>Required</sup> <a name="requireTicketInfo" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireTicketInfo"></a>

```typescript
public readonly requireTicketInfo: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroupRoleManagementPolicyActiveAssignmentRules;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyActiveAssignmentRules">GroupRoleManagementPolicyActiveAssignmentRules</a>

---


### GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference <a name="GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

new groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.resetExpirationRequired">resetExpirationRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.resetExpireAfter">resetExpireAfter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpirationRequired` <a name="resetExpirationRequired" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.resetExpirationRequired"></a>

```typescript
public resetExpirationRequired(): void
```

##### `resetExpireAfter` <a name="resetExpireAfter" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.resetExpireAfter"></a>

```typescript
public resetExpireAfter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expirationRequiredInput">expirationRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expireAfterInput">expireAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expirationRequired">expirationRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expireAfter">expireAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules">GroupRoleManagementPolicyEligibleAssignmentRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expirationRequiredInput`<sup>Optional</sup> <a name="expirationRequiredInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expirationRequiredInput"></a>

```typescript
public readonly expirationRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expireAfterInput`<sup>Optional</sup> <a name="expireAfterInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expireAfterInput"></a>

```typescript
public readonly expireAfterInput: string;
```

- *Type:* string

---

##### `expirationRequired`<sup>Required</sup> <a name="expirationRequired" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expirationRequired"></a>

```typescript
public readonly expirationRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expireAfter`<sup>Required</sup> <a name="expireAfter" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expireAfter"></a>

```typescript
public readonly expireAfter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroupRoleManagementPolicyEligibleAssignmentRules;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyEligibleAssignmentRules">GroupRoleManagementPolicyEligibleAssignmentRules</a>

---


### GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

new groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resetAdditionalRecipients">resetAdditionalRecipients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalRecipients` <a name="resetAdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resetAdditionalRecipients"></a>

```typescript
public resetAdditionalRecipients(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.additionalRecipientsInput">additionalRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.defaultRecipientsInput">defaultRecipientsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.notificationLevelInput">notificationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.defaultRecipients">defaultRecipients</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalRecipientsInput`<sup>Optional</sup> <a name="additionalRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.additionalRecipientsInput"></a>

```typescript
public readonly additionalRecipientsInput: string[];
```

- *Type:* string[]

---

##### `defaultRecipientsInput`<sup>Optional</sup> <a name="defaultRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.defaultRecipientsInput"></a>

```typescript
public readonly defaultRecipientsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationLevelInput`<sup>Optional</sup> <a name="notificationLevelInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.notificationLevelInput"></a>

```typescript
public readonly notificationLevelInput: string;
```

- *Type:* string

---

##### `additionalRecipients`<sup>Required</sup> <a name="additionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

new groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resetAdditionalRecipients">resetAdditionalRecipients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalRecipients` <a name="resetAdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resetAdditionalRecipients"></a>

```typescript
public resetAdditionalRecipients(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.additionalRecipientsInput">additionalRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.defaultRecipientsInput">defaultRecipientsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.notificationLevelInput">notificationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.defaultRecipients">defaultRecipients</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalRecipientsInput`<sup>Optional</sup> <a name="additionalRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.additionalRecipientsInput"></a>

```typescript
public readonly additionalRecipientsInput: string[];
```

- *Type:* string[]

---

##### `defaultRecipientsInput`<sup>Optional</sup> <a name="defaultRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.defaultRecipientsInput"></a>

```typescript
public readonly defaultRecipientsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationLevelInput`<sup>Optional</sup> <a name="notificationLevelInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.notificationLevelInput"></a>

```typescript
public readonly notificationLevelInput: string;
```

- *Type:* string

---

##### `additionalRecipients`<sup>Required</sup> <a name="additionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

new groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resetAdditionalRecipients">resetAdditionalRecipients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalRecipients` <a name="resetAdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resetAdditionalRecipients"></a>

```typescript
public resetAdditionalRecipients(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipientsInput">additionalRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipientsInput">defaultRecipientsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.notificationLevelInput">notificationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients">defaultRecipients</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalRecipientsInput`<sup>Optional</sup> <a name="additionalRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipientsInput"></a>

```typescript
public readonly additionalRecipientsInput: string[];
```

- *Type:* string[]

---

##### `defaultRecipientsInput`<sup>Optional</sup> <a name="defaultRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipientsInput"></a>

```typescript
public readonly defaultRecipientsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationLevelInput`<sup>Optional</sup> <a name="notificationLevelInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.notificationLevelInput"></a>

```typescript
public readonly notificationLevelInput: string;
```

- *Type:* string

---

##### `additionalRecipients`<sup>Required</sup> <a name="additionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

new groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAdminNotifications">putAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putApproverNotifications">putApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAssigneeNotifications">putAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetAdminNotifications">resetAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetApproverNotifications">resetApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetAssigneeNotifications">resetAssigneeNotifications</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdminNotifications` <a name="putAdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAdminNotifications"></a>

```typescript
public putAdminNotifications(value: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAdminNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a>

---

##### `putApproverNotifications` <a name="putApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putApproverNotifications"></a>

```typescript
public putApproverNotifications(value: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putApproverNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a>

---

##### `putAssigneeNotifications` <a name="putAssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAssigneeNotifications"></a>

```typescript
public putAssigneeNotifications(value: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAssigneeNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a>

---

##### `resetAdminNotifications` <a name="resetAdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetAdminNotifications"></a>

```typescript
public resetAdminNotifications(): void
```

##### `resetApproverNotifications` <a name="resetApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetApproverNotifications"></a>

```typescript
public resetApproverNotifications(): void
```

##### `resetAssigneeNotifications` <a name="resetAssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetAssigneeNotifications"></a>

```typescript
public resetAssigneeNotifications(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.adminNotifications">adminNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.approverNotifications">approverNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.assigneeNotifications">assigneeNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.adminNotificationsInput">adminNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.approverNotificationsInput">approverNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.assigneeNotificationsInput">assigneeNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments">GroupRoleManagementPolicyNotificationRulesActiveAssignments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminNotifications`<sup>Required</sup> <a name="adminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.adminNotifications"></a>

```typescript
public readonly adminNotifications: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference</a>

---

##### `approverNotifications`<sup>Required</sup> <a name="approverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.approverNotifications"></a>

```typescript
public readonly approverNotifications: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference</a>

---

##### `assigneeNotifications`<sup>Required</sup> <a name="assigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.assigneeNotifications"></a>

```typescript
public readonly assigneeNotifications: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference</a>

---

##### `adminNotificationsInput`<sup>Optional</sup> <a name="adminNotificationsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.adminNotificationsInput"></a>

```typescript
public readonly adminNotificationsInput: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a>

---

##### `approverNotificationsInput`<sup>Optional</sup> <a name="approverNotificationsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.approverNotificationsInput"></a>

```typescript
public readonly approverNotificationsInput: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a>

---

##### `assigneeNotificationsInput`<sup>Optional</sup> <a name="assigneeNotificationsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.assigneeNotificationsInput"></a>

```typescript
public readonly assigneeNotificationsInput: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroupRoleManagementPolicyNotificationRulesActiveAssignments;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments">GroupRoleManagementPolicyNotificationRulesActiveAssignments</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

new groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resetAdditionalRecipients">resetAdditionalRecipients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalRecipients` <a name="resetAdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resetAdditionalRecipients"></a>

```typescript
public resetAdditionalRecipients(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.additionalRecipientsInput">additionalRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.defaultRecipientsInput">defaultRecipientsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.notificationLevelInput">notificationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.defaultRecipients">defaultRecipients</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalRecipientsInput`<sup>Optional</sup> <a name="additionalRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.additionalRecipientsInput"></a>

```typescript
public readonly additionalRecipientsInput: string[];
```

- *Type:* string[]

---

##### `defaultRecipientsInput`<sup>Optional</sup> <a name="defaultRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.defaultRecipientsInput"></a>

```typescript
public readonly defaultRecipientsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationLevelInput`<sup>Optional</sup> <a name="notificationLevelInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.notificationLevelInput"></a>

```typescript
public readonly notificationLevelInput: string;
```

- *Type:* string

---

##### `additionalRecipients`<sup>Required</sup> <a name="additionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

new groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resetAdditionalRecipients">resetAdditionalRecipients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalRecipients` <a name="resetAdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resetAdditionalRecipients"></a>

```typescript
public resetAdditionalRecipients(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.additionalRecipientsInput">additionalRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.defaultRecipientsInput">defaultRecipientsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.notificationLevelInput">notificationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.defaultRecipients">defaultRecipients</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalRecipientsInput`<sup>Optional</sup> <a name="additionalRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.additionalRecipientsInput"></a>

```typescript
public readonly additionalRecipientsInput: string[];
```

- *Type:* string[]

---

##### `defaultRecipientsInput`<sup>Optional</sup> <a name="defaultRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.defaultRecipientsInput"></a>

```typescript
public readonly defaultRecipientsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationLevelInput`<sup>Optional</sup> <a name="notificationLevelInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.notificationLevelInput"></a>

```typescript
public readonly notificationLevelInput: string;
```

- *Type:* string

---

##### `additionalRecipients`<sup>Required</sup> <a name="additionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

new groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resetAdditionalRecipients">resetAdditionalRecipients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalRecipients` <a name="resetAdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resetAdditionalRecipients"></a>

```typescript
public resetAdditionalRecipients(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.additionalRecipientsInput">additionalRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.defaultRecipientsInput">defaultRecipientsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.notificationLevelInput">notificationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.defaultRecipients">defaultRecipients</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalRecipientsInput`<sup>Optional</sup> <a name="additionalRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.additionalRecipientsInput"></a>

```typescript
public readonly additionalRecipientsInput: string[];
```

- *Type:* string[]

---

##### `defaultRecipientsInput`<sup>Optional</sup> <a name="defaultRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.defaultRecipientsInput"></a>

```typescript
public readonly defaultRecipientsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationLevelInput`<sup>Optional</sup> <a name="notificationLevelInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.notificationLevelInput"></a>

```typescript
public readonly notificationLevelInput: string;
```

- *Type:* string

---

##### `additionalRecipients`<sup>Required</sup> <a name="additionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

new groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAdminNotifications">putAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putApproverNotifications">putApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAssigneeNotifications">putAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetAdminNotifications">resetAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetApproverNotifications">resetApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetAssigneeNotifications">resetAssigneeNotifications</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdminNotifications` <a name="putAdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAdminNotifications"></a>

```typescript
public putAdminNotifications(value: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAdminNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a>

---

##### `putApproverNotifications` <a name="putApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putApproverNotifications"></a>

```typescript
public putApproverNotifications(value: GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putApproverNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a>

---

##### `putAssigneeNotifications` <a name="putAssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAssigneeNotifications"></a>

```typescript
public putAssigneeNotifications(value: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAssigneeNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a>

---

##### `resetAdminNotifications` <a name="resetAdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetAdminNotifications"></a>

```typescript
public resetAdminNotifications(): void
```

##### `resetApproverNotifications` <a name="resetApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetApproverNotifications"></a>

```typescript
public resetApproverNotifications(): void
```

##### `resetAssigneeNotifications` <a name="resetAssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetAssigneeNotifications"></a>

```typescript
public resetAssigneeNotifications(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.adminNotifications">adminNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.approverNotifications">approverNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.assigneeNotifications">assigneeNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.adminNotificationsInput">adminNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.approverNotificationsInput">approverNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.assigneeNotificationsInput">assigneeNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations">GroupRoleManagementPolicyNotificationRulesEligibleActivations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminNotifications`<sup>Required</sup> <a name="adminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.adminNotifications"></a>

```typescript
public readonly adminNotifications: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference</a>

---

##### `approverNotifications`<sup>Required</sup> <a name="approverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.approverNotifications"></a>

```typescript
public readonly approverNotifications: GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference</a>

---

##### `assigneeNotifications`<sup>Required</sup> <a name="assigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.assigneeNotifications"></a>

```typescript
public readonly assigneeNotifications: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference</a>

---

##### `adminNotificationsInput`<sup>Optional</sup> <a name="adminNotificationsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.adminNotificationsInput"></a>

```typescript
public readonly adminNotificationsInput: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a>

---

##### `approverNotificationsInput`<sup>Optional</sup> <a name="approverNotificationsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.approverNotificationsInput"></a>

```typescript
public readonly approverNotificationsInput: GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a>

---

##### `assigneeNotificationsInput`<sup>Optional</sup> <a name="assigneeNotificationsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.assigneeNotificationsInput"></a>

```typescript
public readonly assigneeNotificationsInput: GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroupRoleManagementPolicyNotificationRulesEligibleActivations;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations">GroupRoleManagementPolicyNotificationRulesEligibleActivations</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

new groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resetAdditionalRecipients">resetAdditionalRecipients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalRecipients` <a name="resetAdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resetAdditionalRecipients"></a>

```typescript
public resetAdditionalRecipients(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.additionalRecipientsInput">additionalRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.defaultRecipientsInput">defaultRecipientsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.notificationLevelInput">notificationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.defaultRecipients">defaultRecipients</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalRecipientsInput`<sup>Optional</sup> <a name="additionalRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.additionalRecipientsInput"></a>

```typescript
public readonly additionalRecipientsInput: string[];
```

- *Type:* string[]

---

##### `defaultRecipientsInput`<sup>Optional</sup> <a name="defaultRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.defaultRecipientsInput"></a>

```typescript
public readonly defaultRecipientsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationLevelInput`<sup>Optional</sup> <a name="notificationLevelInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.notificationLevelInput"></a>

```typescript
public readonly notificationLevelInput: string;
```

- *Type:* string

---

##### `additionalRecipients`<sup>Required</sup> <a name="additionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

new groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resetAdditionalRecipients">resetAdditionalRecipients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalRecipients` <a name="resetAdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resetAdditionalRecipients"></a>

```typescript
public resetAdditionalRecipients(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.additionalRecipientsInput">additionalRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.defaultRecipientsInput">defaultRecipientsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.notificationLevelInput">notificationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.defaultRecipients">defaultRecipients</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalRecipientsInput`<sup>Optional</sup> <a name="additionalRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.additionalRecipientsInput"></a>

```typescript
public readonly additionalRecipientsInput: string[];
```

- *Type:* string[]

---

##### `defaultRecipientsInput`<sup>Optional</sup> <a name="defaultRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.defaultRecipientsInput"></a>

```typescript
public readonly defaultRecipientsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationLevelInput`<sup>Optional</sup> <a name="notificationLevelInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.notificationLevelInput"></a>

```typescript
public readonly notificationLevelInput: string;
```

- *Type:* string

---

##### `additionalRecipients`<sup>Required</sup> <a name="additionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

new groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resetAdditionalRecipients">resetAdditionalRecipients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalRecipients` <a name="resetAdditionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resetAdditionalRecipients"></a>

```typescript
public resetAdditionalRecipients(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipientsInput">additionalRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipientsInput">defaultRecipientsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.notificationLevelInput">notificationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients">defaultRecipients</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalRecipientsInput`<sup>Optional</sup> <a name="additionalRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipientsInput"></a>

```typescript
public readonly additionalRecipientsInput: string[];
```

- *Type:* string[]

---

##### `defaultRecipientsInput`<sup>Optional</sup> <a name="defaultRecipientsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipientsInput"></a>

```typescript
public readonly defaultRecipientsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationLevelInput`<sup>Optional</sup> <a name="notificationLevelInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.notificationLevelInput"></a>

```typescript
public readonly notificationLevelInput: string;
```

- *Type:* string

---

##### `additionalRecipients`<sup>Required</sup> <a name="additionalRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a>

---


### GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference <a name="GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

new groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAdminNotifications">putAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putApproverNotifications">putApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAssigneeNotifications">putAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetAdminNotifications">resetAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetApproverNotifications">resetApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetAssigneeNotifications">resetAssigneeNotifications</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdminNotifications` <a name="putAdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAdminNotifications"></a>

```typescript
public putAdminNotifications(value: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAdminNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a>

---

##### `putApproverNotifications` <a name="putApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putApproverNotifications"></a>

```typescript
public putApproverNotifications(value: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putApproverNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a>

---

##### `putAssigneeNotifications` <a name="putAssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAssigneeNotifications"></a>

```typescript
public putAssigneeNotifications(value: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAssigneeNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a>

---

##### `resetAdminNotifications` <a name="resetAdminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetAdminNotifications"></a>

```typescript
public resetAdminNotifications(): void
```

##### `resetApproverNotifications` <a name="resetApproverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetApproverNotifications"></a>

```typescript
public resetApproverNotifications(): void
```

##### `resetAssigneeNotifications` <a name="resetAssigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetAssigneeNotifications"></a>

```typescript
public resetAssigneeNotifications(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.adminNotifications">adminNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.approverNotifications">approverNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.assigneeNotifications">assigneeNotifications</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.adminNotificationsInput">adminNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.approverNotificationsInput">approverNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.assigneeNotificationsInput">assigneeNotificationsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments">GroupRoleManagementPolicyNotificationRulesEligibleAssignments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminNotifications`<sup>Required</sup> <a name="adminNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.adminNotifications"></a>

```typescript
public readonly adminNotifications: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference</a>

---

##### `approverNotifications`<sup>Required</sup> <a name="approverNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.approverNotifications"></a>

```typescript
public readonly approverNotifications: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference</a>

---

##### `assigneeNotifications`<sup>Required</sup> <a name="assigneeNotifications" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.assigneeNotifications"></a>

```typescript
public readonly assigneeNotifications: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference</a>

---

##### `adminNotificationsInput`<sup>Optional</sup> <a name="adminNotificationsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.adminNotificationsInput"></a>

```typescript
public readonly adminNotificationsInput: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a>

---

##### `approverNotificationsInput`<sup>Optional</sup> <a name="approverNotificationsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.approverNotificationsInput"></a>

```typescript
public readonly approverNotificationsInput: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a>

---

##### `assigneeNotificationsInput`<sup>Optional</sup> <a name="assigneeNotificationsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.assigneeNotificationsInput"></a>

```typescript
public readonly assigneeNotificationsInput: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroupRoleManagementPolicyNotificationRulesEligibleAssignments;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments">GroupRoleManagementPolicyNotificationRulesEligibleAssignments</a>

---


### GroupRoleManagementPolicyNotificationRulesOutputReference <a name="GroupRoleManagementPolicyNotificationRulesOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

new groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putActiveAssignments">putActiveAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putEligibleActivations">putEligibleActivations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putEligibleAssignments">putEligibleAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resetActiveAssignments">resetActiveAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resetEligibleActivations">resetEligibleActivations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resetEligibleAssignments">resetEligibleAssignments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveAssignments` <a name="putActiveAssignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putActiveAssignments"></a>

```typescript
public putActiveAssignments(value: GroupRoleManagementPolicyNotificationRulesActiveAssignments): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putActiveAssignments.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments">GroupRoleManagementPolicyNotificationRulesActiveAssignments</a>

---

##### `putEligibleActivations` <a name="putEligibleActivations" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putEligibleActivations"></a>

```typescript
public putEligibleActivations(value: GroupRoleManagementPolicyNotificationRulesEligibleActivations): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putEligibleActivations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations">GroupRoleManagementPolicyNotificationRulesEligibleActivations</a>

---

##### `putEligibleAssignments` <a name="putEligibleAssignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putEligibleAssignments"></a>

```typescript
public putEligibleAssignments(value: GroupRoleManagementPolicyNotificationRulesEligibleAssignments): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.putEligibleAssignments.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments">GroupRoleManagementPolicyNotificationRulesEligibleAssignments</a>

---

##### `resetActiveAssignments` <a name="resetActiveAssignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resetActiveAssignments"></a>

```typescript
public resetActiveAssignments(): void
```

##### `resetEligibleActivations` <a name="resetEligibleActivations" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resetEligibleActivations"></a>

```typescript
public resetEligibleActivations(): void
```

##### `resetEligibleAssignments` <a name="resetEligibleAssignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.resetEligibleAssignments"></a>

```typescript
public resetEligibleAssignments(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.activeAssignments">activeAssignments</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleActivations">eligibleActivations</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleAssignments">eligibleAssignments</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.activeAssignmentsInput">activeAssignmentsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments">GroupRoleManagementPolicyNotificationRulesActiveAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleActivationsInput">eligibleActivationsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations">GroupRoleManagementPolicyNotificationRulesEligibleActivations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleAssignmentsInput">eligibleAssignmentsInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments">GroupRoleManagementPolicyNotificationRulesEligibleAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules">GroupRoleManagementPolicyNotificationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeAssignments`<sup>Required</sup> <a name="activeAssignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.activeAssignments"></a>

```typescript
public readonly activeAssignments: GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference">GroupRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference</a>

---

##### `eligibleActivations`<sup>Required</sup> <a name="eligibleActivations" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleActivations"></a>

```typescript
public readonly eligibleActivations: GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference</a>

---

##### `eligibleAssignments`<sup>Required</sup> <a name="eligibleAssignments" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleAssignments"></a>

```typescript
public readonly eligibleAssignments: GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference">GroupRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference</a>

---

##### `activeAssignmentsInput`<sup>Optional</sup> <a name="activeAssignmentsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.activeAssignmentsInput"></a>

```typescript
public readonly activeAssignmentsInput: GroupRoleManagementPolicyNotificationRulesActiveAssignments;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesActiveAssignments">GroupRoleManagementPolicyNotificationRulesActiveAssignments</a>

---

##### `eligibleActivationsInput`<sup>Optional</sup> <a name="eligibleActivationsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleActivationsInput"></a>

```typescript
public readonly eligibleActivationsInput: GroupRoleManagementPolicyNotificationRulesEligibleActivations;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleActivations">GroupRoleManagementPolicyNotificationRulesEligibleActivations</a>

---

##### `eligibleAssignmentsInput`<sup>Optional</sup> <a name="eligibleAssignmentsInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.eligibleAssignmentsInput"></a>

```typescript
public readonly eligibleAssignmentsInput: GroupRoleManagementPolicyNotificationRulesEligibleAssignments;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesEligibleAssignments">GroupRoleManagementPolicyNotificationRulesEligibleAssignments</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroupRoleManagementPolicyNotificationRules;
```

- *Type:* <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyNotificationRules">GroupRoleManagementPolicyNotificationRules</a>

---


### GroupRoleManagementPolicyTimeoutsOutputReference <a name="GroupRoleManagementPolicyTimeoutsOutputReference" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { groupRoleManagementPolicy } from '@cdktf/provider-azuread'

new groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts">GroupRoleManagementPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroupRoleManagementPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.groupRoleManagementPolicy.GroupRoleManagementPolicyTimeouts">GroupRoleManagementPolicyTimeouts</a>

---



