# `applicationPermissionScope` Submodule <a name="`applicationPermissionScope` Submodule" id="@cdktf/provider-azuread.applicationPermissionScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationPermissionScope <a name="ApplicationPermissionScope" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/application_permission_scope azuread_application_permission_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer"></a>

```typescript
import { applicationPermissionScope } from '@cdktf/provider-azuread'

new applicationPermissionScope.ApplicationPermissionScope(scope: Construct, id: string, config: ApplicationPermissionScopeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig">ApplicationPermissionScopeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig">ApplicationPermissionScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetUserConsentDescription">resetUserConsentDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetUserConsentDisplayName">resetUserConsentDisplayName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.putTimeouts"></a>

```typescript
public putTimeouts(value: ApplicationPermissionScopeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUserConsentDescription` <a name="resetUserConsentDescription" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetUserConsentDescription"></a>

```typescript
public resetUserConsentDescription(): void
```

##### `resetUserConsentDisplayName` <a name="resetUserConsentDisplayName" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetUserConsentDisplayName"></a>

```typescript
public resetUserConsentDisplayName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationPermissionScope resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isConstruct"></a>

```typescript
import { applicationPermissionScope } from '@cdktf/provider-azuread'

applicationPermissionScope.ApplicationPermissionScope.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isTerraformElement"></a>

```typescript
import { applicationPermissionScope } from '@cdktf/provider-azuread'

applicationPermissionScope.ApplicationPermissionScope.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isTerraformResource"></a>

```typescript
import { applicationPermissionScope } from '@cdktf/provider-azuread'

applicationPermissionScope.ApplicationPermissionScope.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.generateConfigForImport"></a>

```typescript
import { applicationPermissionScope } from '@cdktf/provider-azuread'

applicationPermissionScope.ApplicationPermissionScope.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApplicationPermissionScope resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationPermissionScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationPermissionScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/application_permission_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationPermissionScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference">ApplicationPermissionScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDescriptionInput">adminConsentDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDisplayNameInput">adminConsentDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.scopeIdInput">scopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDescriptionInput">userConsentDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDisplayNameInput">userConsentDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDescription">adminConsentDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDisplayName">adminConsentDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.scopeId">scopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDescription">userConsentDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDisplayName">userConsentDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationPermissionScopeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference">ApplicationPermissionScopeTimeoutsOutputReference</a>

---

##### `adminConsentDescriptionInput`<sup>Optional</sup> <a name="adminConsentDescriptionInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDescriptionInput"></a>

```typescript
public readonly adminConsentDescriptionInput: string;
```

- *Type:* string

---

##### `adminConsentDisplayNameInput`<sup>Optional</sup> <a name="adminConsentDisplayNameInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDisplayNameInput"></a>

```typescript
public readonly adminConsentDisplayNameInput: string;
```

- *Type:* string

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.scopeIdInput"></a>

```typescript
public readonly scopeIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApplicationPermissionScopeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userConsentDescriptionInput`<sup>Optional</sup> <a name="userConsentDescriptionInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDescriptionInput"></a>

```typescript
public readonly userConsentDescriptionInput: string;
```

- *Type:* string

---

##### `userConsentDisplayNameInput`<sup>Optional</sup> <a name="userConsentDisplayNameInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDisplayNameInput"></a>

```typescript
public readonly userConsentDisplayNameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `adminConsentDescription`<sup>Required</sup> <a name="adminConsentDescription" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDescription"></a>

```typescript
public readonly adminConsentDescription: string;
```

- *Type:* string

---

##### `adminConsentDisplayName`<sup>Required</sup> <a name="adminConsentDisplayName" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDisplayName"></a>

```typescript
public readonly adminConsentDisplayName: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userConsentDescription`<sup>Required</sup> <a name="userConsentDescription" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDescription"></a>

```typescript
public readonly userConsentDescription: string;
```

- *Type:* string

---

##### `userConsentDisplayName`<sup>Required</sup> <a name="userConsentDisplayName" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDisplayName"></a>

```typescript
public readonly userConsentDisplayName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationPermissionScopeConfig <a name="ApplicationPermissionScopeConfig" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.Initializer"></a>

```typescript
import { applicationPermissionScope } from '@cdktf/provider-azuread'

const applicationPermissionScopeConfig: applicationPermissionScope.ApplicationPermissionScopeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.adminConsentDescription">adminConsentDescription</a></code> | <code>string</code> | Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.adminConsentDisplayName">adminConsentDisplayName</a></code> | <code>string</code> | Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.applicationId">applicationId</a></code> | <code>string</code> | The resource ID of the application to which this permission scope should be applied. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.scopeId">scopeId</a></code> | <code>string</code> | The unique identifier of the permission scope. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.value">value</a></code> | <code>string</code> | The value that is used for the `scp` claim in OAuth access tokens. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/application_permission_scope#id ApplicationPermissionScope#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.type">type</a></code> | <code>string</code> | Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.userConsentDescription">userConsentDescription</a></code> | <code>string</code> | Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.userConsentDisplayName">userConsentDisplayName</a></code> | <code>string</code> | Display name for the delegated permission that appears in the end user consent experience. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminConsentDescription`<sup>Required</sup> <a name="adminConsentDescription" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.adminConsentDescription"></a>

```typescript
public readonly adminConsentDescription: string;
```

- *Type:* string

Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/application_permission_scope#admin_consent_description ApplicationPermissionScope#admin_consent_description}

---

##### `adminConsentDisplayName`<sup>Required</sup> <a name="adminConsentDisplayName" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.adminConsentDisplayName"></a>

```typescript
public readonly adminConsentDisplayName: string;
```

- *Type:* string

Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/application_permission_scope#admin_consent_display_name ApplicationPermissionScope#admin_consent_display_name}

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The resource ID of the application to which this permission scope should be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/application_permission_scope#application_id ApplicationPermissionScope#application_id}

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

The unique identifier of the permission scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/application_permission_scope#scope_id ApplicationPermissionScope#scope_id}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value that is used for the `scp` claim in OAuth access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/application_permission_scope#value ApplicationPermissionScope#value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/application_permission_scope#id ApplicationPermissionScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationPermissionScopeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/application_permission_scope#timeouts ApplicationPermissionScope#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/application_permission_scope#type ApplicationPermissionScope#type}

---

##### `userConsentDescription`<sup>Optional</sup> <a name="userConsentDescription" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.userConsentDescription"></a>

```typescript
public readonly userConsentDescription: string;
```

- *Type:* string

Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/application_permission_scope#user_consent_description ApplicationPermissionScope#user_consent_description}

---

##### `userConsentDisplayName`<sup>Optional</sup> <a name="userConsentDisplayName" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.userConsentDisplayName"></a>

```typescript
public readonly userConsentDisplayName: string;
```

- *Type:* string

Display name for the delegated permission that appears in the end user consent experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/application_permission_scope#user_consent_display_name ApplicationPermissionScope#user_consent_display_name}

---

### ApplicationPermissionScopeTimeouts <a name="ApplicationPermissionScopeTimeouts" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.Initializer"></a>

```typescript
import { applicationPermissionScope } from '@cdktf/provider-azuread'

const applicationPermissionScopeTimeouts: applicationPermissionScope.ApplicationPermissionScopeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/application_permission_scope#create ApplicationPermissionScope#create}. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/application_permission_scope#delete ApplicationPermissionScope#delete}. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/application_permission_scope#read ApplicationPermissionScope#read}. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/application_permission_scope#update ApplicationPermissionScope#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/application_permission_scope#create ApplicationPermissionScope#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/application_permission_scope#delete ApplicationPermissionScope#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/application_permission_scope#read ApplicationPermissionScope#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/resources/application_permission_scope#update ApplicationPermissionScope#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationPermissionScopeTimeoutsOutputReference <a name="ApplicationPermissionScopeTimeoutsOutputReference" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.Initializer"></a>

```typescript
import { applicationPermissionScope } from '@cdktf/provider-azuread'

new applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationPermissionScopeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a>

---



