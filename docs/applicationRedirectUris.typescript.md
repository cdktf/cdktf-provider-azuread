# `azuread_application_redirect_uris`

Refer to the Terraform Registory for docs: [`azuread_application_redirect_uris`](https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_redirect_uris).

# `applicationRedirectUris` Submodule <a name="`applicationRedirectUris` Submodule" id="@cdktf/provider-azuread.applicationRedirectUris"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationRedirectUris <a name="ApplicationRedirectUris" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_redirect_uris azuread_application_redirect_uris}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.Initializer"></a>

```typescript
import { applicationRedirectUris } from '@cdktf/provider-azuread'

new applicationRedirectUris.ApplicationRedirectUris(scope: Construct, id: string, config: ApplicationRedirectUrisConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig">ApplicationRedirectUrisConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig">ApplicationRedirectUrisConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.putTimeouts"></a>

```typescript
public putTimeouts(value: ApplicationRedirectUrisTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts">ApplicationRedirectUrisTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationRedirectUris resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.isConstruct"></a>

```typescript
import { applicationRedirectUris } from '@cdktf/provider-azuread'

applicationRedirectUris.ApplicationRedirectUris.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.isTerraformElement"></a>

```typescript
import { applicationRedirectUris } from '@cdktf/provider-azuread'

applicationRedirectUris.ApplicationRedirectUris.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.isTerraformResource"></a>

```typescript
import { applicationRedirectUris } from '@cdktf/provider-azuread'

applicationRedirectUris.ApplicationRedirectUris.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.generateConfigForImport"></a>

```typescript
import { applicationRedirectUris } from '@cdktf/provider-azuread'

applicationRedirectUris.ApplicationRedirectUris.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApplicationRedirectUris resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationRedirectUris to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationRedirectUris that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_redirect_uris#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationRedirectUris to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference">ApplicationRedirectUrisTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.redirectUrisInput">redirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts">ApplicationRedirectUrisTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationRedirectUrisTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference">ApplicationRedirectUrisTimeoutsOutputReference</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `redirectUrisInput`<sup>Optional</sup> <a name="redirectUrisInput" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.redirectUrisInput"></a>

```typescript
public readonly redirectUrisInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApplicationRedirectUrisTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts">ApplicationRedirectUrisTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationRedirectUrisConfig <a name="ApplicationRedirectUrisConfig" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.Initializer"></a>

```typescript
import { applicationRedirectUris } from '@cdktf/provider-azuread'

const applicationRedirectUrisConfig: applicationRedirectUris.ApplicationRedirectUrisConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.applicationId">applicationId</a></code> | <code>string</code> | The resource ID of the application to which these redirect URIs belong. |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | A set of redirect URIs. |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.type">type</a></code> | <code>string</code> | The type of redirect URIs to assign to the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_redirect_uris#id ApplicationRedirectUris#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts">ApplicationRedirectUrisTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The resource ID of the application to which these redirect URIs belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_redirect_uris#application_id ApplicationRedirectUris#application_id}

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

A set of redirect URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_redirect_uris#redirect_uris ApplicationRedirectUris#redirect_uris}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of redirect URIs to assign to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_redirect_uris#type ApplicationRedirectUris#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_redirect_uris#id ApplicationRedirectUris#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationRedirectUrisTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts">ApplicationRedirectUrisTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_redirect_uris#timeouts ApplicationRedirectUris#timeouts}

---

### ApplicationRedirectUrisTimeouts <a name="ApplicationRedirectUrisTimeouts" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts.Initializer"></a>

```typescript
import { applicationRedirectUris } from '@cdktf/provider-azuread'

const applicationRedirectUrisTimeouts: applicationRedirectUris.ApplicationRedirectUrisTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_redirect_uris#create ApplicationRedirectUris#create}. |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_redirect_uris#delete ApplicationRedirectUris#delete}. |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_redirect_uris#read ApplicationRedirectUris#read}. |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_redirect_uris#update ApplicationRedirectUris#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_redirect_uris#create ApplicationRedirectUris#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_redirect_uris#delete ApplicationRedirectUris#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_redirect_uris#read ApplicationRedirectUris#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_redirect_uris#update ApplicationRedirectUris#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationRedirectUrisTimeoutsOutputReference <a name="ApplicationRedirectUrisTimeoutsOutputReference" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.Initializer"></a>

```typescript
import { applicationRedirectUris } from '@cdktf/provider-azuread'

new applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts">ApplicationRedirectUrisTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationRedirectUrisTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts">ApplicationRedirectUrisTimeouts</a>

---



