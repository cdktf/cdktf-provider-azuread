# `administrativeUnitRoleMember` Submodule <a name="`administrativeUnitRoleMember` Submodule" id="@cdktf/provider-azuread.administrativeUnitRoleMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdministrativeUnitRoleMember <a name="AdministrativeUnitRoleMember" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/administrative_unit_role_member azuread_administrative_unit_role_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer"></a>

```typescript
import { administrativeUnitRoleMember } from '@cdktf/provider-azuread'

new administrativeUnitRoleMember.AdministrativeUnitRoleMember(scope: Construct, id: string, config: AdministrativeUnitRoleMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig">AdministrativeUnitRoleMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig">AdministrativeUnitRoleMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.putTimeouts"></a>

```typescript
public putTimeouts(value: AdministrativeUnitRoleMemberTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts">AdministrativeUnitRoleMemberTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AdministrativeUnitRoleMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isConstruct"></a>

```typescript
import { administrativeUnitRoleMember } from '@cdktf/provider-azuread'

administrativeUnitRoleMember.AdministrativeUnitRoleMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformElement"></a>

```typescript
import { administrativeUnitRoleMember } from '@cdktf/provider-azuread'

administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformResource"></a>

```typescript
import { administrativeUnitRoleMember } from '@cdktf/provider-azuread'

administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.generateConfigForImport"></a>

```typescript
import { administrativeUnitRoleMember } from '@cdktf/provider-azuread'

administrativeUnitRoleMember.AdministrativeUnitRoleMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AdministrativeUnitRoleMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AdministrativeUnitRoleMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AdministrativeUnitRoleMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/administrative_unit_role_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AdministrativeUnitRoleMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference">AdministrativeUnitRoleMemberTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.administrativeUnitObjectIdInput">administrativeUnitObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.memberObjectIdInput">memberObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.roleObjectIdInput">roleObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts">AdministrativeUnitRoleMemberTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.administrativeUnitObjectId">administrativeUnitObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.memberObjectId">memberObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.roleObjectId">roleObjectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.timeouts"></a>

```typescript
public readonly timeouts: AdministrativeUnitRoleMemberTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference">AdministrativeUnitRoleMemberTimeoutsOutputReference</a>

---

##### `administrativeUnitObjectIdInput`<sup>Optional</sup> <a name="administrativeUnitObjectIdInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.administrativeUnitObjectIdInput"></a>

```typescript
public readonly administrativeUnitObjectIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberObjectIdInput`<sup>Optional</sup> <a name="memberObjectIdInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.memberObjectIdInput"></a>

```typescript
public readonly memberObjectIdInput: string;
```

- *Type:* string

---

##### `roleObjectIdInput`<sup>Optional</sup> <a name="roleObjectIdInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.roleObjectIdInput"></a>

```typescript
public readonly roleObjectIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AdministrativeUnitRoleMemberTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts">AdministrativeUnitRoleMemberTimeouts</a>

---

##### `administrativeUnitObjectId`<sup>Required</sup> <a name="administrativeUnitObjectId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.administrativeUnitObjectId"></a>

```typescript
public readonly administrativeUnitObjectId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memberObjectId`<sup>Required</sup> <a name="memberObjectId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.memberObjectId"></a>

```typescript
public readonly memberObjectId: string;
```

- *Type:* string

---

##### `roleObjectId`<sup>Required</sup> <a name="roleObjectId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.roleObjectId"></a>

```typescript
public readonly roleObjectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AdministrativeUnitRoleMemberConfig <a name="AdministrativeUnitRoleMemberConfig" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.Initializer"></a>

```typescript
import { administrativeUnitRoleMember } from '@cdktf/provider-azuread'

const administrativeUnitRoleMemberConfig: administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.administrativeUnitObjectId">administrativeUnitObjectId</a></code> | <code>string</code> | The object ID of the administrative unit. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.memberObjectId">memberObjectId</a></code> | <code>string</code> | The object ID of the member. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.roleObjectId">roleObjectId</a></code> | <code>string</code> | The object ID of the directory role. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/administrative_unit_role_member#id AdministrativeUnitRoleMember#id}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts">AdministrativeUnitRoleMemberTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `administrativeUnitObjectId`<sup>Required</sup> <a name="administrativeUnitObjectId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.administrativeUnitObjectId"></a>

```typescript
public readonly administrativeUnitObjectId: string;
```

- *Type:* string

The object ID of the administrative unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/administrative_unit_role_member#administrative_unit_object_id AdministrativeUnitRoleMember#administrative_unit_object_id}

---

##### `memberObjectId`<sup>Required</sup> <a name="memberObjectId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.memberObjectId"></a>

```typescript
public readonly memberObjectId: string;
```

- *Type:* string

The object ID of the member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/administrative_unit_role_member#member_object_id AdministrativeUnitRoleMember#member_object_id}

---

##### `roleObjectId`<sup>Required</sup> <a name="roleObjectId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.roleObjectId"></a>

```typescript
public readonly roleObjectId: string;
```

- *Type:* string

The object ID of the directory role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/administrative_unit_role_member#role_object_id AdministrativeUnitRoleMember#role_object_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/administrative_unit_role_member#id AdministrativeUnitRoleMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AdministrativeUnitRoleMemberTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts">AdministrativeUnitRoleMemberTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/administrative_unit_role_member#timeouts AdministrativeUnitRoleMember#timeouts}

---

### AdministrativeUnitRoleMemberTimeouts <a name="AdministrativeUnitRoleMemberTimeouts" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.Initializer"></a>

```typescript
import { administrativeUnitRoleMember } from '@cdktf/provider-azuread'

const administrativeUnitRoleMemberTimeouts: administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/administrative_unit_role_member#create AdministrativeUnitRoleMember#create}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/administrative_unit_role_member#delete AdministrativeUnitRoleMember#delete}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/administrative_unit_role_member#read AdministrativeUnitRoleMember#read}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/administrative_unit_role_member#update AdministrativeUnitRoleMember#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/administrative_unit_role_member#create AdministrativeUnitRoleMember#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/administrative_unit_role_member#delete AdministrativeUnitRoleMember#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/administrative_unit_role_member#read AdministrativeUnitRoleMember#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/administrative_unit_role_member#update AdministrativeUnitRoleMember#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AdministrativeUnitRoleMemberTimeoutsOutputReference <a name="AdministrativeUnitRoleMemberTimeoutsOutputReference" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.Initializer"></a>

```typescript
import { administrativeUnitRoleMember } from '@cdktf/provider-azuread'

new administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts">AdministrativeUnitRoleMemberTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AdministrativeUnitRoleMemberTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts">AdministrativeUnitRoleMemberTimeouts</a>

---



