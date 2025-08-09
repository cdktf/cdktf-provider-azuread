# `customDirectoryRole` Submodule <a name="`customDirectoryRole` Submodule" id="@cdktf/provider-azuread.customDirectoryRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomDirectoryRole <a name="CustomDirectoryRole" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/custom_directory_role azuread_custom_directory_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer"></a>

```typescript
import { customDirectoryRole } from '@cdktf/provider-azuread'

new customDirectoryRole.CustomDirectoryRole(scope: Construct, id: string, config: CustomDirectoryRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig">CustomDirectoryRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig">CustomDirectoryRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.resetTemplateId">resetTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPermissions` <a name="putPermissions" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.putPermissions"></a>

```typescript
public putPermissions(value: IResolvable | CustomDirectoryRolePermissions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.putPermissions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions">CustomDirectoryRolePermissions</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.putTimeouts"></a>

```typescript
public putTimeouts(value: CustomDirectoryRoleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts">CustomDirectoryRoleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTemplateId` <a name="resetTemplateId" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.resetTemplateId"></a>

```typescript
public resetTemplateId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CustomDirectoryRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.isConstruct"></a>

```typescript
import { customDirectoryRole } from '@cdktf/provider-azuread'

customDirectoryRole.CustomDirectoryRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.isTerraformElement"></a>

```typescript
import { customDirectoryRole } from '@cdktf/provider-azuread'

customDirectoryRole.CustomDirectoryRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.isTerraformResource"></a>

```typescript
import { customDirectoryRole } from '@cdktf/provider-azuread'

customDirectoryRole.CustomDirectoryRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.generateConfigForImport"></a>

```typescript
import { customDirectoryRole } from '@cdktf/provider-azuread'

customDirectoryRole.CustomDirectoryRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CustomDirectoryRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomDirectoryRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomDirectoryRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/custom_directory_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CustomDirectoryRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList">CustomDirectoryRolePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference">CustomDirectoryRoleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.permissionsInput">permissionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions">CustomDirectoryRolePermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.templateIdInput">templateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts">CustomDirectoryRoleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.templateId">templateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.permissions"></a>

```typescript
public readonly permissions: CustomDirectoryRolePermissionsList;
```

- *Type:* <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList">CustomDirectoryRolePermissionsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.timeouts"></a>

```typescript
public readonly timeouts: CustomDirectoryRoleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference">CustomDirectoryRoleTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: IResolvable | CustomDirectoryRolePermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions">CustomDirectoryRolePermissions</a>[]

---

##### `templateIdInput`<sup>Optional</sup> <a name="templateIdInput" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.templateIdInput"></a>

```typescript
public readonly templateIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CustomDirectoryRoleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts">CustomDirectoryRoleTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomDirectoryRoleConfig <a name="CustomDirectoryRoleConfig" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.Initializer"></a>

```typescript
import { customDirectoryRole } from '@cdktf/provider-azuread'

const customDirectoryRoleConfig: customDirectoryRole.CustomDirectoryRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the custom directory role. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the role is enabled for assignment. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.permissions">permissions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions">CustomDirectoryRolePermissions</a>[]</code> | permissions block. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.version">version</a></code> | <code>string</code> | The version of the role definition. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.description">description</a></code> | <code>string</code> | The description of the custom directory role. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/custom_directory_role#id CustomDirectoryRole#id}. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.templateId">templateId</a></code> | <code>string</code> | Custom template identifier that is typically used if one needs an identifier to be the same across different directories. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts">CustomDirectoryRoleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the custom directory role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/custom_directory_role#display_name CustomDirectoryRole#display_name}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the role is enabled for assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/custom_directory_role#enabled CustomDirectoryRole#enabled}

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.permissions"></a>

```typescript
public readonly permissions: IResolvable | CustomDirectoryRolePermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions">CustomDirectoryRolePermissions</a>[]

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/custom_directory_role#permissions CustomDirectoryRole#permissions}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version of the role definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/custom_directory_role#version CustomDirectoryRole#version}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the custom directory role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/custom_directory_role#description CustomDirectoryRole#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/custom_directory_role#id CustomDirectoryRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `templateId`<sup>Optional</sup> <a name="templateId" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

Custom template identifier that is typically used if one needs an identifier to be the same across different directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/custom_directory_role#template_id CustomDirectoryRole#template_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CustomDirectoryRoleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts">CustomDirectoryRoleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/custom_directory_role#timeouts CustomDirectoryRole#timeouts}

---

### CustomDirectoryRolePermissions <a name="CustomDirectoryRolePermissions" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions.Initializer"></a>

```typescript
import { customDirectoryRole } from '@cdktf/provider-azuread'

const customDirectoryRolePermissions: customDirectoryRole.CustomDirectoryRolePermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions.property.allowedResourceActions">allowedResourceActions</a></code> | <code>string[]</code> | Set of tasks that can be performed on a resource. |

---

##### `allowedResourceActions`<sup>Required</sup> <a name="allowedResourceActions" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions.property.allowedResourceActions"></a>

```typescript
public readonly allowedResourceActions: string[];
```

- *Type:* string[]

Set of tasks that can be performed on a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/custom_directory_role#allowed_resource_actions CustomDirectoryRole#allowed_resource_actions}

---

### CustomDirectoryRoleTimeouts <a name="CustomDirectoryRoleTimeouts" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts.Initializer"></a>

```typescript
import { customDirectoryRole } from '@cdktf/provider-azuread'

const customDirectoryRoleTimeouts: customDirectoryRole.CustomDirectoryRoleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/custom_directory_role#create CustomDirectoryRole#create}. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/custom_directory_role#delete CustomDirectoryRole#delete}. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/custom_directory_role#read CustomDirectoryRole#read}. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/custom_directory_role#update CustomDirectoryRole#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/custom_directory_role#create CustomDirectoryRole#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/custom_directory_role#delete CustomDirectoryRole#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/custom_directory_role#read CustomDirectoryRole#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/custom_directory_role#update CustomDirectoryRole#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomDirectoryRolePermissionsList <a name="CustomDirectoryRolePermissionsList" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.Initializer"></a>

```typescript
import { customDirectoryRole } from '@cdktf/provider-azuread'

new customDirectoryRole.CustomDirectoryRolePermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.get"></a>

```typescript
public get(index: number): CustomDirectoryRolePermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions">CustomDirectoryRolePermissions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomDirectoryRolePermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions">CustomDirectoryRolePermissions</a>[]

---


### CustomDirectoryRolePermissionsOutputReference <a name="CustomDirectoryRolePermissionsOutputReference" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.Initializer"></a>

```typescript
import { customDirectoryRole } from '@cdktf/provider-azuread'

new customDirectoryRole.CustomDirectoryRolePermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.property.allowedResourceActionsInput">allowedResourceActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.property.allowedResourceActions">allowedResourceActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions">CustomDirectoryRolePermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedResourceActionsInput`<sup>Optional</sup> <a name="allowedResourceActionsInput" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.property.allowedResourceActionsInput"></a>

```typescript
public readonly allowedResourceActionsInput: string[];
```

- *Type:* string[]

---

##### `allowedResourceActions`<sup>Required</sup> <a name="allowedResourceActions" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.property.allowedResourceActions"></a>

```typescript
public readonly allowedResourceActions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomDirectoryRolePermissions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRolePermissions">CustomDirectoryRolePermissions</a>

---


### CustomDirectoryRoleTimeoutsOutputReference <a name="CustomDirectoryRoleTimeoutsOutputReference" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.Initializer"></a>

```typescript
import { customDirectoryRole } from '@cdktf/provider-azuread'

new customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts">CustomDirectoryRoleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomDirectoryRoleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.customDirectoryRole.CustomDirectoryRoleTimeouts">CustomDirectoryRoleTimeouts</a>

---



