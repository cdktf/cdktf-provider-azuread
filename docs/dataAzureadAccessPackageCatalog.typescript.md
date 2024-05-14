# `dataAzureadAccessPackageCatalog` Submodule <a name="`dataAzureadAccessPackageCatalog` Submodule" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadAccessPackageCatalog <a name="DataAzureadAccessPackageCatalog" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/access_package_catalog azuread_access_package_catalog}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.Initializer"></a>

```typescript
import { dataAzureadAccessPackageCatalog } from '@cdktf/provider-azuread'

new dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog(scope: Construct, id: string, config?: DataAzureadAccessPackageCatalogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig">DataAzureadAccessPackageCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig">DataAzureadAccessPackageCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.resetObjectId">resetObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzureadAccessPackageCatalogTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeouts">DataAzureadAccessPackageCatalogTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.resetId"></a>

```typescript
public resetId(): void
```

##### `resetObjectId` <a name="resetObjectId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.resetObjectId"></a>

```typescript
public resetObjectId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzureadAccessPackageCatalog resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.isConstruct"></a>

```typescript
import { dataAzureadAccessPackageCatalog } from '@cdktf/provider-azuread'

dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.isTerraformElement"></a>

```typescript
import { dataAzureadAccessPackageCatalog } from '@cdktf/provider-azuread'

dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.isTerraformDataSource"></a>

```typescript
import { dataAzureadAccessPackageCatalog } from '@cdktf/provider-azuread'

dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.generateConfigForImport"></a>

```typescript
import { dataAzureadAccessPackageCatalog } from '@cdktf/provider-azuread'

dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzureadAccessPackageCatalog resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzureadAccessPackageCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzureadAccessPackageCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/access_package_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzureadAccessPackageCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.externallyVisible">externallyVisible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.published">published</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference">DataAzureadAccessPackageCatalogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeouts">DataAzureadAccessPackageCatalogTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `externallyVisible`<sup>Required</sup> <a name="externallyVisible" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.externallyVisible"></a>

```typescript
public readonly externallyVisible: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `published`<sup>Required</sup> <a name="published" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.published"></a>

```typescript
public readonly published: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadAccessPackageCatalogTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference">DataAzureadAccessPackageCatalogTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzureadAccessPackageCatalogTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeouts">DataAzureadAccessPackageCatalogTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadAccessPackageCatalogConfig <a name="DataAzureadAccessPackageCatalogConfig" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.Initializer"></a>

```typescript
import { dataAzureadAccessPackageCatalog } from '@cdktf/provider-azuread'

const dataAzureadAccessPackageCatalogConfig: dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the access package catalog. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/access_package_catalog#id DataAzureadAccessPackageCatalog#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.objectId">objectId</a></code> | <code>string</code> | The ID of this access package catalog. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeouts">DataAzureadAccessPackageCatalogTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the access package catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/access_package_catalog#display_name DataAzureadAccessPackageCatalog#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/access_package_catalog#id DataAzureadAccessPackageCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objectId`<sup>Optional</sup> <a name="objectId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

The ID of this access package catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/access_package_catalog#object_id DataAzureadAccessPackageCatalog#object_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadAccessPackageCatalogTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeouts">DataAzureadAccessPackageCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/access_package_catalog#timeouts DataAzureadAccessPackageCatalog#timeouts}

---

### DataAzureadAccessPackageCatalogTimeouts <a name="DataAzureadAccessPackageCatalogTimeouts" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeouts.Initializer"></a>

```typescript
import { dataAzureadAccessPackageCatalog } from '@cdktf/provider-azuread'

const dataAzureadAccessPackageCatalogTimeouts: dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/access_package_catalog#read DataAzureadAccessPackageCatalog#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/access_package_catalog#read DataAzureadAccessPackageCatalog#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadAccessPackageCatalogTimeoutsOutputReference <a name="DataAzureadAccessPackageCatalogTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzureadAccessPackageCatalog } from '@cdktf/provider-azuread'

new dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeouts">DataAzureadAccessPackageCatalogTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzureadAccessPackageCatalogTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeouts">DataAzureadAccessPackageCatalogTimeouts</a>

---



