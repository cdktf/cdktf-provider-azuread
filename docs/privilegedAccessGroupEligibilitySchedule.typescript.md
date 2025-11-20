# `privilegedAccessGroupEligibilitySchedule` Submodule <a name="`privilegedAccessGroupEligibilitySchedule` Submodule" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivilegedAccessGroupEligibilitySchedule <a name="PrivilegedAccessGroupEligibilitySchedule" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/privileged_access_group_eligibility_schedule azuread_privileged_access_group_eligibility_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer"></a>

```typescript
import { privilegedAccessGroupEligibilitySchedule } from '@cdktf/provider-azuread'

new privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule(scope: Construct, id: string, config: PrivilegedAccessGroupEligibilityScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig">PrivilegedAccessGroupEligibilityScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig">PrivilegedAccessGroupEligibilityScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetExpirationDate">resetExpirationDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetJustification">resetJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetPermanentAssignment">resetPermanentAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetStartDate">resetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetTicketNumber">resetTicketNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetTicketSystem">resetTicketSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.putTimeouts"></a>

```typescript
public putTimeouts(value: PrivilegedAccessGroupEligibilityScheduleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts">PrivilegedAccessGroupEligibilityScheduleTimeouts</a>

---

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetExpirationDate` <a name="resetExpirationDate" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetExpirationDate"></a>

```typescript
public resetExpirationDate(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetJustification` <a name="resetJustification" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetJustification"></a>

```typescript
public resetJustification(): void
```

##### `resetPermanentAssignment` <a name="resetPermanentAssignment" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetPermanentAssignment"></a>

```typescript
public resetPermanentAssignment(): void
```

##### `resetStartDate` <a name="resetStartDate" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetStartDate"></a>

```typescript
public resetStartDate(): void
```

##### `resetTicketNumber` <a name="resetTicketNumber" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetTicketNumber"></a>

```typescript
public resetTicketNumber(): void
```

##### `resetTicketSystem` <a name="resetTicketSystem" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetTicketSystem"></a>

```typescript
public resetTicketSystem(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrivilegedAccessGroupEligibilitySchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.isConstruct"></a>

```typescript
import { privilegedAccessGroupEligibilitySchedule } from '@cdktf/provider-azuread'

privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.isTerraformElement"></a>

```typescript
import { privilegedAccessGroupEligibilitySchedule } from '@cdktf/provider-azuread'

privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.isTerraformResource"></a>

```typescript
import { privilegedAccessGroupEligibilitySchedule } from '@cdktf/provider-azuread'

privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.generateConfigForImport"></a>

```typescript
import { privilegedAccessGroupEligibilitySchedule } from '@cdktf/provider-azuread'

privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PrivilegedAccessGroupEligibilitySchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivilegedAccessGroupEligibilitySchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivilegedAccessGroupEligibilitySchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/privileged_access_group_eligibility_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivilegedAccessGroupEligibilitySchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference">PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.assignmentTypeInput">assignmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.expirationDateInput">expirationDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.justificationInput">justificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.permanentAssignmentInput">permanentAssignmentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.principalIdInput">principalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.startDateInput">startDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.ticketNumberInput">ticketNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.ticketSystemInput">ticketSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts">PrivilegedAccessGroupEligibilityScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.assignmentType">assignmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.expirationDate">expirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.justification">justification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.permanentAssignment">permanentAssignment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.ticketNumber">ticketNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.ticketSystem">ticketSystem</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.timeouts"></a>

```typescript
public readonly timeouts: PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference">PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference</a>

---

##### `assignmentTypeInput`<sup>Optional</sup> <a name="assignmentTypeInput" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.assignmentTypeInput"></a>

```typescript
public readonly assignmentTypeInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `expirationDateInput`<sup>Optional</sup> <a name="expirationDateInput" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.expirationDateInput"></a>

```typescript
public readonly expirationDateInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `justificationInput`<sup>Optional</sup> <a name="justificationInput" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.justificationInput"></a>

```typescript
public readonly justificationInput: string;
```

- *Type:* string

---

##### `permanentAssignmentInput`<sup>Optional</sup> <a name="permanentAssignmentInput" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.permanentAssignmentInput"></a>

```typescript
public readonly permanentAssignmentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.principalIdInput"></a>

```typescript
public readonly principalIdInput: string;
```

- *Type:* string

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.startDateInput"></a>

```typescript
public readonly startDateInput: string;
```

- *Type:* string

---

##### `ticketNumberInput`<sup>Optional</sup> <a name="ticketNumberInput" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.ticketNumberInput"></a>

```typescript
public readonly ticketNumberInput: string;
```

- *Type:* string

---

##### `ticketSystemInput`<sup>Optional</sup> <a name="ticketSystemInput" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.ticketSystemInput"></a>

```typescript
public readonly ticketSystemInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PrivilegedAccessGroupEligibilityScheduleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts">PrivilegedAccessGroupEligibilityScheduleTimeouts</a>

---

##### `assignmentType`<sup>Required</sup> <a name="assignmentType" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.assignmentType"></a>

```typescript
public readonly assignmentType: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `justification`<sup>Required</sup> <a name="justification" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.justification"></a>

```typescript
public readonly justification: string;
```

- *Type:* string

---

##### `permanentAssignment`<sup>Required</sup> <a name="permanentAssignment" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.permanentAssignment"></a>

```typescript
public readonly permanentAssignment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `ticketNumber`<sup>Required</sup> <a name="ticketNumber" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.ticketNumber"></a>

```typescript
public readonly ticketNumber: string;
```

- *Type:* string

---

##### `ticketSystem`<sup>Required</sup> <a name="ticketSystem" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.ticketSystem"></a>

```typescript
public readonly ticketSystem: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilitySchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivilegedAccessGroupEligibilityScheduleConfig <a name="PrivilegedAccessGroupEligibilityScheduleConfig" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.Initializer"></a>

```typescript
import { privilegedAccessGroupEligibilitySchedule } from '@cdktf/provider-azuread'

const privilegedAccessGroupEligibilityScheduleConfig: privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.assignmentType">assignmentType</a></code> | <code>string</code> | The ID of the assignment to the group. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.groupId">groupId</a></code> | <code>string</code> | The ID of the Group representing the scope of the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.principalId">principalId</a></code> | <code>string</code> | The ID of the Principal assigned to the schedule. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.duration">duration</a></code> | <code>string</code> | The duration of the assignment, formatted as an ISO8601 duration string (e.g. P3D for 3 days). |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.expirationDate">expirationDate</a></code> | <code>string</code> | The date that this assignment expires, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z). |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/privileged_access_group_eligibility_schedule#id PrivilegedAccessGroupEligibilitySchedule#id}. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.justification">justification</a></code> | <code>string</code> | The justification for the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.permanentAssignment">permanentAssignment</a></code> | <code>boolean \| cdktf.IResolvable</code> | Is the assignment permanent. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.startDate">startDate</a></code> | <code>string</code> | The date that this assignment starts, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z). |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.ticketNumber">ticketNumber</a></code> | <code>string</code> | The ticket number authorising the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.ticketSystem">ticketSystem</a></code> | <code>string</code> | The ticket system authorising the assignment. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts">PrivilegedAccessGroupEligibilityScheduleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `assignmentType`<sup>Required</sup> <a name="assignmentType" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.assignmentType"></a>

```typescript
public readonly assignmentType: string;
```

- *Type:* string

The ID of the assignment to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/privileged_access_group_eligibility_schedule#assignment_type PrivilegedAccessGroupEligibilitySchedule#assignment_type}

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The ID of the Group representing the scope of the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/privileged_access_group_eligibility_schedule#group_id PrivilegedAccessGroupEligibilitySchedule#group_id}

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

The ID of the Principal assigned to the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/privileged_access_group_eligibility_schedule#principal_id PrivilegedAccessGroupEligibilitySchedule#principal_id}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

The duration of the assignment, formatted as an ISO8601 duration string (e.g. P3D for 3 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/privileged_access_group_eligibility_schedule#duration PrivilegedAccessGroupEligibilitySchedule#duration}

---

##### `expirationDate`<sup>Optional</sup> <a name="expirationDate" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

The date that this assignment expires, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/privileged_access_group_eligibility_schedule#expiration_date PrivilegedAccessGroupEligibilitySchedule#expiration_date}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/privileged_access_group_eligibility_schedule#id PrivilegedAccessGroupEligibilitySchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `justification`<sup>Optional</sup> <a name="justification" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.justification"></a>

```typescript
public readonly justification: string;
```

- *Type:* string

The justification for the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/privileged_access_group_eligibility_schedule#justification PrivilegedAccessGroupEligibilitySchedule#justification}

---

##### `permanentAssignment`<sup>Optional</sup> <a name="permanentAssignment" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.permanentAssignment"></a>

```typescript
public readonly permanentAssignment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Is the assignment permanent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/privileged_access_group_eligibility_schedule#permanent_assignment PrivilegedAccessGroupEligibilitySchedule#permanent_assignment}

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

The date that this assignment starts, formatted as an RFC3339 date string in UTC (e.g. 2018-01-01T01:02:03Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/privileged_access_group_eligibility_schedule#start_date PrivilegedAccessGroupEligibilitySchedule#start_date}

---

##### `ticketNumber`<sup>Optional</sup> <a name="ticketNumber" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.ticketNumber"></a>

```typescript
public readonly ticketNumber: string;
```

- *Type:* string

The ticket number authorising the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/privileged_access_group_eligibility_schedule#ticket_number PrivilegedAccessGroupEligibilitySchedule#ticket_number}

---

##### `ticketSystem`<sup>Optional</sup> <a name="ticketSystem" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.ticketSystem"></a>

```typescript
public readonly ticketSystem: string;
```

- *Type:* string

The ticket system authorising the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/privileged_access_group_eligibility_schedule#ticket_system PrivilegedAccessGroupEligibilitySchedule#ticket_system}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PrivilegedAccessGroupEligibilityScheduleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts">PrivilegedAccessGroupEligibilityScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/privileged_access_group_eligibility_schedule#timeouts PrivilegedAccessGroupEligibilitySchedule#timeouts}

---

### PrivilegedAccessGroupEligibilityScheduleTimeouts <a name="PrivilegedAccessGroupEligibilityScheduleTimeouts" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts.Initializer"></a>

```typescript
import { privilegedAccessGroupEligibilitySchedule } from '@cdktf/provider-azuread'

const privilegedAccessGroupEligibilityScheduleTimeouts: privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/privileged_access_group_eligibility_schedule#create PrivilegedAccessGroupEligibilitySchedule#create}. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/privileged_access_group_eligibility_schedule#delete PrivilegedAccessGroupEligibilitySchedule#delete}. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/privileged_access_group_eligibility_schedule#read PrivilegedAccessGroupEligibilitySchedule#read}. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/privileged_access_group_eligibility_schedule#update PrivilegedAccessGroupEligibilitySchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/privileged_access_group_eligibility_schedule#create PrivilegedAccessGroupEligibilitySchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/privileged_access_group_eligibility_schedule#delete PrivilegedAccessGroupEligibilitySchedule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/privileged_access_group_eligibility_schedule#read PrivilegedAccessGroupEligibilitySchedule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/privileged_access_group_eligibility_schedule#update PrivilegedAccessGroupEligibilitySchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference <a name="PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.Initializer"></a>

```typescript
import { privilegedAccessGroupEligibilitySchedule } from '@cdktf/provider-azuread'

new privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts">PrivilegedAccessGroupEligibilityScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivilegedAccessGroupEligibilityScheduleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.privilegedAccessGroupEligibilitySchedule.PrivilegedAccessGroupEligibilityScheduleTimeouts">PrivilegedAccessGroupEligibilityScheduleTimeouts</a>

---



