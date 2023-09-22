# `data_azuread_directory_object`

Refer to the Terraform Registory for docs: [`data_azuread_directory_object`](https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/directory_object).

# `dataAzureadDirectoryObject` Submodule <a name="`dataAzureadDirectoryObject` Submodule" id="@cdktf/provider-azuread.dataAzureadDirectoryObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadDirectoryObject <a name="DataAzureadDirectoryObject" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/directory_object azuread_directory_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.Initializer"></a>

```typescript
import { dataAzureadDirectoryObject } from '@cdktf/provider-azuread'

new dataAzureadDirectoryObject.DataAzureadDirectoryObject(scope: Construct, id: string, config: DataAzureadDirectoryObjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig">DataAzureadDirectoryObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig">DataAzureadDirectoryObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzureadDirectoryObjectTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeouts">DataAzureadDirectoryObjectTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.isConstruct"></a>

```typescript
import { dataAzureadDirectoryObject } from '@cdktf/provider-azuread'

dataAzureadDirectoryObject.DataAzureadDirectoryObject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.isTerraformElement"></a>

```typescript
import { dataAzureadDirectoryObject } from '@cdktf/provider-azuread'

dataAzureadDirectoryObject.DataAzureadDirectoryObject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.isTerraformDataSource"></a>

```typescript
import { dataAzureadDirectoryObject } from '@cdktf/provider-azuread'

dataAzureadDirectoryObject.DataAzureadDirectoryObject.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference">DataAzureadDirectoryObjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeouts">DataAzureadDirectoryObjectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadDirectoryObjectTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference">DataAzureadDirectoryObjectTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzureadDirectoryObjectTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeouts">DataAzureadDirectoryObjectTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadDirectoryObjectConfig <a name="DataAzureadDirectoryObjectConfig" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig.Initializer"></a>

```typescript
import { dataAzureadDirectoryObject } from '@cdktf/provider-azuread'

const dataAzureadDirectoryObjectConfig: dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig.property.objectId">objectId</a></code> | <code>string</code> | The object ID of the principal. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/directory_object#id DataAzureadDirectoryObject#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeouts">DataAzureadDirectoryObjectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

The object ID of the principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/directory_object#object_id DataAzureadDirectoryObject#object_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/directory_object#id DataAzureadDirectoryObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadDirectoryObjectTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeouts">DataAzureadDirectoryObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/directory_object#timeouts DataAzureadDirectoryObject#timeouts}

---

### DataAzureadDirectoryObjectTimeouts <a name="DataAzureadDirectoryObjectTimeouts" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeouts.Initializer"></a>

```typescript
import { dataAzureadDirectoryObject } from '@cdktf/provider-azuread'

const dataAzureadDirectoryObjectTimeouts: dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/directory_object#read DataAzureadDirectoryObject#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/directory_object#read DataAzureadDirectoryObject#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadDirectoryObjectTimeoutsOutputReference <a name="DataAzureadDirectoryObjectTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzureadDirectoryObject } from '@cdktf/provider-azuread'

new dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeouts">DataAzureadDirectoryObjectTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzureadDirectoryObjectTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.dataAzureadDirectoryObject.DataAzureadDirectoryObjectTimeouts">DataAzureadDirectoryObjectTimeouts</a>

---



