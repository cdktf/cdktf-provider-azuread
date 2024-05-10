# `synchronizationJobProvisionOnDemand` Submodule <a name="`synchronizationJobProvisionOnDemand` Submodule" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynchronizationJobProvisionOnDemand <a name="SynchronizationJobProvisionOnDemand" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/synchronization_job_provision_on_demand azuread_synchronization_job_provision_on_demand}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.Initializer"></a>

```typescript
import { synchronizationJobProvisionOnDemand } from '@cdktf/provider-azuread'

new synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand(scope: Construct, id: string, config: SynchronizationJobProvisionOnDemandConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig">SynchronizationJobProvisionOnDemandConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig">SynchronizationJobProvisionOnDemandConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.resetTriggers">resetTriggers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParameter` <a name="putParameter" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.putParameter"></a>

```typescript
public putParameter(value: IResolvable | SynchronizationJobProvisionOnDemandParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.putParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter">SynchronizationJobProvisionOnDemandParameter</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.putTimeouts"></a>

```typescript
public putTimeouts(value: SynchronizationJobProvisionOnDemandTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts">SynchronizationJobProvisionOnDemandTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.resetTriggers"></a>

```typescript
public resetTriggers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SynchronizationJobProvisionOnDemand resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isConstruct"></a>

```typescript
import { synchronizationJobProvisionOnDemand } from '@cdktf/provider-azuread'

synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isTerraformElement"></a>

```typescript
import { synchronizationJobProvisionOnDemand } from '@cdktf/provider-azuread'

synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isTerraformResource"></a>

```typescript
import { synchronizationJobProvisionOnDemand } from '@cdktf/provider-azuread'

synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.generateConfigForImport"></a>

```typescript
import { synchronizationJobProvisionOnDemand } from '@cdktf/provider-azuread'

synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SynchronizationJobProvisionOnDemand resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SynchronizationJobProvisionOnDemand to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SynchronizationJobProvisionOnDemand that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/synchronization_job_provision_on_demand#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SynchronizationJobProvisionOnDemand to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList">SynchronizationJobProvisionOnDemandParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference">SynchronizationJobProvisionOnDemandTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.parameterInput">parameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter">SynchronizationJobProvisionOnDemandParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.servicePrincipalIdInput">servicePrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.synchronizationJobIdInput">synchronizationJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts">SynchronizationJobProvisionOnDemandTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.triggersInput">triggersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.servicePrincipalId">servicePrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.synchronizationJobId">synchronizationJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.triggers">triggers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.parameter"></a>

```typescript
public readonly parameter: SynchronizationJobProvisionOnDemandParameterList;
```

- *Type:* <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList">SynchronizationJobProvisionOnDemandParameterList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.timeouts"></a>

```typescript
public readonly timeouts: SynchronizationJobProvisionOnDemandTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference">SynchronizationJobProvisionOnDemandTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.parameterInput"></a>

```typescript
public readonly parameterInput: IResolvable | SynchronizationJobProvisionOnDemandParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter">SynchronizationJobProvisionOnDemandParameter</a>[]

---

##### `servicePrincipalIdInput`<sup>Optional</sup> <a name="servicePrincipalIdInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.servicePrincipalIdInput"></a>

```typescript
public readonly servicePrincipalIdInput: string;
```

- *Type:* string

---

##### `synchronizationJobIdInput`<sup>Optional</sup> <a name="synchronizationJobIdInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.synchronizationJobIdInput"></a>

```typescript
public readonly synchronizationJobIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SynchronizationJobProvisionOnDemandTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts">SynchronizationJobProvisionOnDemandTimeouts</a>

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.triggersInput"></a>

```typescript
public readonly triggersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* string

---

##### `synchronizationJobId`<sup>Required</sup> <a name="synchronizationJobId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.synchronizationJobId"></a>

```typescript
public readonly synchronizationJobId: string;
```

- *Type:* string

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.triggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemand.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SynchronizationJobProvisionOnDemandConfig <a name="SynchronizationJobProvisionOnDemandConfig" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.Initializer"></a>

```typescript
import { synchronizationJobProvisionOnDemand } from '@cdktf/provider-azuread'

const synchronizationJobProvisionOnDemandConfig: synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.parameter">parameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter">SynchronizationJobProvisionOnDemandParameter</a>[]</code> | parameter block. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.servicePrincipalId">servicePrincipalId</a></code> | <code>string</code> | The object ID of the service principal for which this synchronization job should be provisioned. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.synchronizationJobId">synchronizationJobId</a></code> | <code>string</code> | The identifier for the synchronization jop. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/synchronization_job_provision_on_demand#id SynchronizationJobProvisionOnDemand#id}. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts">SynchronizationJobProvisionOnDemandTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.triggers">triggers</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/synchronization_job_provision_on_demand#triggers SynchronizationJobProvisionOnDemand#triggers}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.parameter"></a>

```typescript
public readonly parameter: IResolvable | SynchronizationJobProvisionOnDemandParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter">SynchronizationJobProvisionOnDemandParameter</a>[]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/synchronization_job_provision_on_demand#parameter SynchronizationJobProvisionOnDemand#parameter}

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* string

The object ID of the service principal for which this synchronization job should be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/synchronization_job_provision_on_demand#service_principal_id SynchronizationJobProvisionOnDemand#service_principal_id}

---

##### `synchronizationJobId`<sup>Required</sup> <a name="synchronizationJobId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.synchronizationJobId"></a>

```typescript
public readonly synchronizationJobId: string;
```

- *Type:* string

The identifier for the synchronization jop.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/synchronization_job_provision_on_demand#synchronization_job_id SynchronizationJobProvisionOnDemand#synchronization_job_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/synchronization_job_provision_on_demand#id SynchronizationJobProvisionOnDemand#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SynchronizationJobProvisionOnDemandTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts">SynchronizationJobProvisionOnDemandTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/synchronization_job_provision_on_demand#timeouts SynchronizationJobProvisionOnDemand#timeouts}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandConfig.property.triggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/synchronization_job_provision_on_demand#triggers SynchronizationJobProvisionOnDemand#triggers}.

---

### SynchronizationJobProvisionOnDemandParameter <a name="SynchronizationJobProvisionOnDemandParameter" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter.Initializer"></a>

```typescript
import { synchronizationJobProvisionOnDemand } from '@cdktf/provider-azuread'

const synchronizationJobProvisionOnDemandParameter: synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter.property.ruleId">ruleId</a></code> | <code>string</code> | The identifier of the synchronization rule to be applied. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter.property.subject">subject</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject">SynchronizationJobProvisionOnDemandParameterSubject</a>[]</code> | subject block. |

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

The identifier of the synchronization rule to be applied.

This rule ID is defined in the schema for a given synchronization job or template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/synchronization_job_provision_on_demand#rule_id SynchronizationJobProvisionOnDemand#rule_id}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter.property.subject"></a>

```typescript
public readonly subject: IResolvable | SynchronizationJobProvisionOnDemandParameterSubject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject">SynchronizationJobProvisionOnDemandParameterSubject</a>[]

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/synchronization_job_provision_on_demand#subject SynchronizationJobProvisionOnDemand#subject}

---

### SynchronizationJobProvisionOnDemandParameterSubject <a name="SynchronizationJobProvisionOnDemandParameterSubject" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject.Initializer"></a>

```typescript
import { synchronizationJobProvisionOnDemand } from '@cdktf/provider-azuread'

const synchronizationJobProvisionOnDemandParameterSubject: synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject.property.objectId">objectId</a></code> | <code>string</code> | The identifier of an object to which a synchronization job is to be applied. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject.property.objectTypeName">objectTypeName</a></code> | <code>string</code> | The type of the object to which a synchronization job is to be applied. |

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

The identifier of an object to which a synchronization job is to be applied.

Can be one of the following: (1) An onPremisesDistinguishedName for synchronization from Active Directory to Azure AD. (2) The user ID for synchronization from Azure AD to a third-party. (3) The Worker ID of the Workday worker for synchronization from Workday to either Active Directory or Azure AD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/synchronization_job_provision_on_demand#object_id SynchronizationJobProvisionOnDemand#object_id}

---

##### `objectTypeName`<sup>Required</sup> <a name="objectTypeName" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject.property.objectTypeName"></a>

```typescript
public readonly objectTypeName: string;
```

- *Type:* string

The type of the object to which a synchronization job is to be applied.

Can be one of the following: `user` for synchronizing between Active Directory and Azure AD, `User` for synchronizing a user between Azure AD and a third-party application, `Worker` for synchronization a user between Workday and either Active Directory or Azure AD, `Group` for synchronizing a group between Azure AD and a third-party application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/synchronization_job_provision_on_demand#object_type_name SynchronizationJobProvisionOnDemand#object_type_name}

---

### SynchronizationJobProvisionOnDemandTimeouts <a name="SynchronizationJobProvisionOnDemandTimeouts" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts.Initializer"></a>

```typescript
import { synchronizationJobProvisionOnDemand } from '@cdktf/provider-azuread'

const synchronizationJobProvisionOnDemandTimeouts: synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/synchronization_job_provision_on_demand#create SynchronizationJobProvisionOnDemand#create}. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/synchronization_job_provision_on_demand#delete SynchronizationJobProvisionOnDemand#delete}. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/synchronization_job_provision_on_demand#read SynchronizationJobProvisionOnDemand#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/synchronization_job_provision_on_demand#create SynchronizationJobProvisionOnDemand#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/synchronization_job_provision_on_demand#delete SynchronizationJobProvisionOnDemand#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/synchronization_job_provision_on_demand#read SynchronizationJobProvisionOnDemand#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynchronizationJobProvisionOnDemandParameterList <a name="SynchronizationJobProvisionOnDemandParameterList" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.Initializer"></a>

```typescript
import { synchronizationJobProvisionOnDemand } from '@cdktf/provider-azuread'

new synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.get"></a>

```typescript
public get(index: number): SynchronizationJobProvisionOnDemandParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter">SynchronizationJobProvisionOnDemandParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SynchronizationJobProvisionOnDemandParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter">SynchronizationJobProvisionOnDemandParameter</a>[]

---


### SynchronizationJobProvisionOnDemandParameterOutputReference <a name="SynchronizationJobProvisionOnDemandParameterOutputReference" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer"></a>

```typescript
import { synchronizationJobProvisionOnDemand } from '@cdktf/provider-azuread'

new synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.putSubject">putSubject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubject` <a name="putSubject" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.putSubject"></a>

```typescript
public putSubject(value: IResolvable | SynchronizationJobProvisionOnDemandParameterSubject[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.putSubject.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject">SynchronizationJobProvisionOnDemandParameterSubject</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList">SynchronizationJobProvisionOnDemandParameterSubjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.ruleIdInput">ruleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.subjectInput">subjectInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject">SynchronizationJobProvisionOnDemandParameterSubject</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter">SynchronizationJobProvisionOnDemandParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.subject"></a>

```typescript
public readonly subject: SynchronizationJobProvisionOnDemandParameterSubjectList;
```

- *Type:* <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList">SynchronizationJobProvisionOnDemandParameterSubjectList</a>

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.ruleIdInput"></a>

```typescript
public readonly ruleIdInput: string;
```

- *Type:* string

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.subjectInput"></a>

```typescript
public readonly subjectInput: IResolvable | SynchronizationJobProvisionOnDemandParameterSubject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject">SynchronizationJobProvisionOnDemandParameterSubject</a>[]

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SynchronizationJobProvisionOnDemandParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameter">SynchronizationJobProvisionOnDemandParameter</a>

---


### SynchronizationJobProvisionOnDemandParameterSubjectList <a name="SynchronizationJobProvisionOnDemandParameterSubjectList" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.Initializer"></a>

```typescript
import { synchronizationJobProvisionOnDemand } from '@cdktf/provider-azuread'

new synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.get"></a>

```typescript
public get(index: number): SynchronizationJobProvisionOnDemandParameterSubjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject">SynchronizationJobProvisionOnDemandParameterSubject</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SynchronizationJobProvisionOnDemandParameterSubject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject">SynchronizationJobProvisionOnDemandParameterSubject</a>[]

---


### SynchronizationJobProvisionOnDemandParameterSubjectOutputReference <a name="SynchronizationJobProvisionOnDemandParameterSubjectOutputReference" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer"></a>

```typescript
import { synchronizationJobProvisionOnDemand } from '@cdktf/provider-azuread'

new synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectTypeNameInput">objectTypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectTypeName">objectTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject">SynchronizationJobProvisionOnDemandParameterSubject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `objectTypeNameInput`<sup>Optional</sup> <a name="objectTypeNameInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectTypeNameInput"></a>

```typescript
public readonly objectTypeNameInput: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `objectTypeName`<sup>Required</sup> <a name="objectTypeName" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.objectTypeName"></a>

```typescript
public readonly objectTypeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SynchronizationJobProvisionOnDemandParameterSubject;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandParameterSubject">SynchronizationJobProvisionOnDemandParameterSubject</a>

---


### SynchronizationJobProvisionOnDemandTimeoutsOutputReference <a name="SynchronizationJobProvisionOnDemandTimeoutsOutputReference" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.Initializer"></a>

```typescript
import { synchronizationJobProvisionOnDemand } from '@cdktf/provider-azuread'

new synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts">SynchronizationJobProvisionOnDemandTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SynchronizationJobProvisionOnDemandTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.synchronizationJobProvisionOnDemand.SynchronizationJobProvisionOnDemandTimeouts">SynchronizationJobProvisionOnDemandTimeouts</a>

---



