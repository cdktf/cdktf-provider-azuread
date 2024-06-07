# `applicationFederatedIdentityCredential` Submodule <a name="`applicationFederatedIdentityCredential` Submodule" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationFederatedIdentityCredential <a name="ApplicationFederatedIdentityCredential" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/resources/application_federated_identity_credential azuread_application_federated_identity_credential}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer"></a>

```typescript
import { applicationFederatedIdentityCredential } from '@cdktf/provider-azuread'

new applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential(scope: Construct, id: string, config: ApplicationFederatedIdentityCredentialConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig">ApplicationFederatedIdentityCredentialConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig">ApplicationFederatedIdentityCredentialConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.resetApplicationObjectId">resetApplicationObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.putTimeouts"></a>

```typescript
public putTimeouts(value: ApplicationFederatedIdentityCredentialTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts">ApplicationFederatedIdentityCredentialTimeouts</a>

---

##### `resetApplicationId` <a name="resetApplicationId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.resetApplicationId"></a>

```typescript
public resetApplicationId(): void
```

##### `resetApplicationObjectId` <a name="resetApplicationObjectId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.resetApplicationObjectId"></a>

```typescript
public resetApplicationObjectId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationFederatedIdentityCredential resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.isConstruct"></a>

```typescript
import { applicationFederatedIdentityCredential } from '@cdktf/provider-azuread'

applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.isTerraformElement"></a>

```typescript
import { applicationFederatedIdentityCredential } from '@cdktf/provider-azuread'

applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.isTerraformResource"></a>

```typescript
import { applicationFederatedIdentityCredential } from '@cdktf/provider-azuread'

applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.generateConfigForImport"></a>

```typescript
import { applicationFederatedIdentityCredential } from '@cdktf/provider-azuread'

applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApplicationFederatedIdentityCredential resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationFederatedIdentityCredential to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationFederatedIdentityCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/resources/application_federated_identity_credential#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationFederatedIdentityCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.credentialId">credentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference">ApplicationFederatedIdentityCredentialTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.applicationObjectIdInput">applicationObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.audiencesInput">audiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.subjectInput">subjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts">ApplicationFederatedIdentityCredentialTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.applicationObjectId">applicationObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.audiences">audiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.subject">subject</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `credentialId`<sup>Required</sup> <a name="credentialId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.credentialId"></a>

```typescript
public readonly credentialId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationFederatedIdentityCredentialTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference">ApplicationFederatedIdentityCredentialTimeoutsOutputReference</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `applicationObjectIdInput`<sup>Optional</sup> <a name="applicationObjectIdInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.applicationObjectIdInput"></a>

```typescript
public readonly applicationObjectIdInput: string;
```

- *Type:* string

---

##### `audiencesInput`<sup>Optional</sup> <a name="audiencesInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.audiencesInput"></a>

```typescript
public readonly audiencesInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.subjectInput"></a>

```typescript
public readonly subjectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApplicationFederatedIdentityCredentialTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts">ApplicationFederatedIdentityCredentialTimeouts</a>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `applicationObjectId`<sup>Required</sup> <a name="applicationObjectId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.applicationObjectId"></a>

```typescript
public readonly applicationObjectId: string;
```

- *Type:* string

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.audiences"></a>

```typescript
public readonly audiences: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationFederatedIdentityCredentialConfig <a name="ApplicationFederatedIdentityCredentialConfig" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.Initializer"></a>

```typescript
import { applicationFederatedIdentityCredential } from '@cdktf/provider-azuread'

const applicationFederatedIdentityCredentialConfig: applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.audiences">audiences</a></code> | <code>string[]</code> | List of audiences that can appear in the external token. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.displayName">displayName</a></code> | <code>string</code> | A unique display name for the federated identity credential. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.issuer">issuer</a></code> | <code>string</code> | The URL of the external identity provider, which must match the issuer claim of the external token being exchanged. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.subject">subject</a></code> | <code>string</code> | The identifier of the external software workload within the external identity provider. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.applicationId">applicationId</a></code> | <code>string</code> | The resource ID of the application for which this federated identity credential should be created. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.applicationObjectId">applicationObjectId</a></code> | <code>string</code> | The object ID of the application for which this federated identity credential should be created. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.description">description</a></code> | <code>string</code> | A description for the federated identity credential. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/resources/application_federated_identity_credential#id ApplicationFederatedIdentityCredential#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts">ApplicationFederatedIdentityCredentialTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.audiences"></a>

```typescript
public readonly audiences: string[];
```

- *Type:* string[]

List of audiences that can appear in the external token.

This specifies what should be accepted in the `aud` claim of incoming tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/resources/application_federated_identity_credential#audiences ApplicationFederatedIdentityCredential#audiences}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A unique display name for the federated identity credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/resources/application_federated_identity_credential#display_name ApplicationFederatedIdentityCredential#display_name}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

The URL of the external identity provider, which must match the issuer claim of the external token being exchanged.

The combination of the values of issuer and subject must be unique on the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/resources/application_federated_identity_credential#issuer ApplicationFederatedIdentityCredential#issuer}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

The identifier of the external software workload within the external identity provider.

The combination of issuer and subject must be unique on the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/resources/application_federated_identity_credential#subject ApplicationFederatedIdentityCredential#subject}

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The resource ID of the application for which this federated identity credential should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/resources/application_federated_identity_credential#application_id ApplicationFederatedIdentityCredential#application_id}

---

##### `applicationObjectId`<sup>Optional</sup> <a name="applicationObjectId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.applicationObjectId"></a>

```typescript
public readonly applicationObjectId: string;
```

- *Type:* string

The object ID of the application for which this federated identity credential should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/resources/application_federated_identity_credential#application_object_id ApplicationFederatedIdentityCredential#application_object_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the federated identity credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/resources/application_federated_identity_credential#description ApplicationFederatedIdentityCredential#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/resources/application_federated_identity_credential#id ApplicationFederatedIdentityCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationFederatedIdentityCredentialTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts">ApplicationFederatedIdentityCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/resources/application_federated_identity_credential#timeouts ApplicationFederatedIdentityCredential#timeouts}

---

### ApplicationFederatedIdentityCredentialTimeouts <a name="ApplicationFederatedIdentityCredentialTimeouts" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts.Initializer"></a>

```typescript
import { applicationFederatedIdentityCredential } from '@cdktf/provider-azuread'

const applicationFederatedIdentityCredentialTimeouts: applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/resources/application_federated_identity_credential#create ApplicationFederatedIdentityCredential#create}. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/resources/application_federated_identity_credential#delete ApplicationFederatedIdentityCredential#delete}. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/resources/application_federated_identity_credential#read ApplicationFederatedIdentityCredential#read}. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/resources/application_federated_identity_credential#update ApplicationFederatedIdentityCredential#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/resources/application_federated_identity_credential#create ApplicationFederatedIdentityCredential#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/resources/application_federated_identity_credential#delete ApplicationFederatedIdentityCredential#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/resources/application_federated_identity_credential#read ApplicationFederatedIdentityCredential#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/resources/application_federated_identity_credential#update ApplicationFederatedIdentityCredential#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationFederatedIdentityCredentialTimeoutsOutputReference <a name="ApplicationFederatedIdentityCredentialTimeoutsOutputReference" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.Initializer"></a>

```typescript
import { applicationFederatedIdentityCredential } from '@cdktf/provider-azuread'

new applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts">ApplicationFederatedIdentityCredentialTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationFederatedIdentityCredentialTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts">ApplicationFederatedIdentityCredentialTimeouts</a>

---



