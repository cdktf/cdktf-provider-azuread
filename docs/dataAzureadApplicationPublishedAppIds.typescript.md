# `data_azuread_application_published_app_ids`

Refer to the Terraform Registory for docs: [`data_azuread_application_published_app_ids`](https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/application_published_app_ids).

# `dataAzureadApplicationPublishedAppIds` Submodule <a name="`dataAzureadApplicationPublishedAppIds` Submodule" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadApplicationPublishedAppIds <a name="DataAzureadApplicationPublishedAppIds" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/application_published_app_ids azuread_application_published_app_ids}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer"></a>

```typescript
import { dataAzureadApplicationPublishedAppIds } from '@cdktf/provider-azuread'

new dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds(scope: Construct, id: string, config?: DataAzureadApplicationPublishedAppIdsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig">DataAzureadApplicationPublishedAppIdsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig">DataAzureadApplicationPublishedAppIdsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzureadApplicationPublishedAppIdsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isConstruct"></a>

```typescript
import { dataAzureadApplicationPublishedAppIds } from '@cdktf/provider-azuread'

dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isTerraformElement"></a>

```typescript
import { dataAzureadApplicationPublishedAppIds } from '@cdktf/provider-azuread'

dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isTerraformDataSource"></a>

```typescript
import { dataAzureadApplicationPublishedAppIds } from '@cdktf/provider-azuread'

dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.result">result</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference">DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.result"></a>

```typescript
public readonly result: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference">DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzureadApplicationPublishedAppIdsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadApplicationPublishedAppIdsConfig <a name="DataAzureadApplicationPublishedAppIdsConfig" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.Initializer"></a>

```typescript
import { dataAzureadApplicationPublishedAppIds } from '@cdktf/provider-azuread'

const dataAzureadApplicationPublishedAppIdsConfig: dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/application_published_app_ids#id DataAzureadApplicationPublishedAppIds#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/application_published_app_ids#id DataAzureadApplicationPublishedAppIds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadApplicationPublishedAppIdsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/application_published_app_ids#timeouts DataAzureadApplicationPublishedAppIds#timeouts}

---

### DataAzureadApplicationPublishedAppIdsTimeouts <a name="DataAzureadApplicationPublishedAppIdsTimeouts" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts.Initializer"></a>

```typescript
import { dataAzureadApplicationPublishedAppIds } from '@cdktf/provider-azuread'

const dataAzureadApplicationPublishedAppIdsTimeouts: dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/application_published_app_ids#read DataAzureadApplicationPublishedAppIds#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/application_published_app_ids#read DataAzureadApplicationPublishedAppIds#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference <a name="DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzureadApplicationPublishedAppIds } from '@cdktf/provider-azuread'

new dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzureadApplicationPublishedAppIdsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a> | cdktf.IResolvable

---



