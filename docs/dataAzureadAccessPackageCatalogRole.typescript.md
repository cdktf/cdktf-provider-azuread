# `data_azuread_access_package_catalog_role`

Refer to the Terraform Registory for docs: [`data_azuread_access_package_catalog_role`](https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/access_package_catalog_role).

# `dataAzureadAccessPackageCatalogRole` Submodule <a name="`dataAzureadAccessPackageCatalogRole` Submodule" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadAccessPackageCatalogRole <a name="DataAzureadAccessPackageCatalogRole" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/access_package_catalog_role azuread_access_package_catalog_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.Initializer"></a>

```typescript
import { dataAzureadAccessPackageCatalogRole } from '@cdktf/provider-azuread'

new dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole(scope: Construct, id: string, config?: DataAzureadAccessPackageCatalogRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig">DataAzureadAccessPackageCatalogRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig">DataAzureadAccessPackageCatalogRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.resetObjectId">resetObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzureadAccessPackageCatalogRoleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeouts">DataAzureadAccessPackageCatalogRoleTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetObjectId` <a name="resetObjectId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.resetObjectId"></a>

```typescript
public resetObjectId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzureadAccessPackageCatalogRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.isConstruct"></a>

```typescript
import { dataAzureadAccessPackageCatalogRole } from '@cdktf/provider-azuread'

dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.isTerraformElement"></a>

```typescript
import { dataAzureadAccessPackageCatalogRole } from '@cdktf/provider-azuread'

dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.isTerraformDataSource"></a>

```typescript
import { dataAzureadAccessPackageCatalogRole } from '@cdktf/provider-azuread'

dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.generateConfigForImport"></a>

```typescript
import { dataAzureadAccessPackageCatalogRole } from '@cdktf/provider-azuread'

dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzureadAccessPackageCatalogRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzureadAccessPackageCatalogRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzureadAccessPackageCatalogRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/access_package_catalog_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzureadAccessPackageCatalogRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.templateId">templateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference">DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeouts">DataAzureadAccessPackageCatalogRoleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference">DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzureadAccessPackageCatalogRoleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeouts">DataAzureadAccessPackageCatalogRoleTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadAccessPackageCatalogRoleConfig <a name="DataAzureadAccessPackageCatalogRoleConfig" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.Initializer"></a>

```typescript
import { dataAzureadAccessPackageCatalogRole } from '@cdktf/provider-azuread'

const dataAzureadAccessPackageCatalogRoleConfig: dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the catalog role. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/access_package_catalog_role#id DataAzureadAccessPackageCatalogRole#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.objectId">objectId</a></code> | <code>string</code> | The object ID of the catalog role. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeouts">DataAzureadAccessPackageCatalogRoleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the catalog role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/access_package_catalog_role#display_name DataAzureadAccessPackageCatalogRole#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/access_package_catalog_role#id DataAzureadAccessPackageCatalogRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objectId`<sup>Optional</sup> <a name="objectId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

The object ID of the catalog role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/access_package_catalog_role#object_id DataAzureadAccessPackageCatalogRole#object_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadAccessPackageCatalogRoleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeouts">DataAzureadAccessPackageCatalogRoleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/access_package_catalog_role#timeouts DataAzureadAccessPackageCatalogRole#timeouts}

---

### DataAzureadAccessPackageCatalogRoleTimeouts <a name="DataAzureadAccessPackageCatalogRoleTimeouts" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeouts.Initializer"></a>

```typescript
import { dataAzureadAccessPackageCatalogRole } from '@cdktf/provider-azuread'

const dataAzureadAccessPackageCatalogRoleTimeouts: dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/access_package_catalog_role#read DataAzureadAccessPackageCatalogRole#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/access_package_catalog_role#read DataAzureadAccessPackageCatalogRole#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference <a name="DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzureadAccessPackageCatalogRole } from '@cdktf/provider-azuread'

new dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeouts">DataAzureadAccessPackageCatalogRoleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzureadAccessPackageCatalogRoleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeouts">DataAzureadAccessPackageCatalogRoleTimeouts</a>

---



