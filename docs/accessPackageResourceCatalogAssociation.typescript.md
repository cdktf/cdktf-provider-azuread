# `azuread_access_package_resource_catalog_association`

Refer to the Terraform Registory for docs: [`azuread_access_package_resource_catalog_association`](https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association).

# `accessPackageResourceCatalogAssociation` Submodule <a name="`accessPackageResourceCatalogAssociation` Submodule" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessPackageResourceCatalogAssociation <a name="AccessPackageResourceCatalogAssociation" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association azuread_access_package_resource_catalog_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer"></a>

```typescript
import { accessPackageResourceCatalogAssociation } from '@cdktf/provider-azuread'

new accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation(scope: Construct, id: string, config: AccessPackageResourceCatalogAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig">AccessPackageResourceCatalogAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig">AccessPackageResourceCatalogAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: AccessPackageResourceCatalogAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isConstruct"></a>

```typescript
import { accessPackageResourceCatalogAssociation } from '@cdktf/provider-azuread'

accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isTerraformElement"></a>

```typescript
import { accessPackageResourceCatalogAssociation } from '@cdktf/provider-azuread'

accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isTerraformResource"></a>

```typescript
import { accessPackageResourceCatalogAssociation } from '@cdktf/provider-azuread'

accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference">AccessPackageResourceCatalogAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginIdInput">resourceOriginIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginSystemInput">resourceOriginSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginId">resourceOriginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginSystem">resourceOriginSystem</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: AccessPackageResourceCatalogAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference">AccessPackageResourceCatalogAssociationTimeoutsOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceOriginIdInput`<sup>Optional</sup> <a name="resourceOriginIdInput" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginIdInput"></a>

```typescript
public readonly resourceOriginIdInput: string;
```

- *Type:* string

---

##### `resourceOriginSystemInput`<sup>Optional</sup> <a name="resourceOriginSystemInput" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginSystemInput"></a>

```typescript
public readonly resourceOriginSystemInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AccessPackageResourceCatalogAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceOriginId`<sup>Required</sup> <a name="resourceOriginId" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginId"></a>

```typescript
public readonly resourceOriginId: string;
```

- *Type:* string

---

##### `resourceOriginSystem`<sup>Required</sup> <a name="resourceOriginSystem" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginSystem"></a>

```typescript
public readonly resourceOriginSystem: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessPackageResourceCatalogAssociationConfig <a name="AccessPackageResourceCatalogAssociationConfig" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.Initializer"></a>

```typescript
import { accessPackageResourceCatalogAssociation } from '@cdktf/provider-azuread'

const accessPackageResourceCatalogAssociationConfig: accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.catalogId">catalogId</a></code> | <code>string</code> | The unique ID of the access package catalog. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.resourceOriginId">resourceOriginId</a></code> | <code>string</code> | The unique identifier of the resource in the origin system. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.resourceOriginSystem">resourceOriginSystem</a></code> | <code>string</code> | The type of the resource in the origin system, such as SharePointOnline, AadApplication or AadGroup. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#id AccessPackageResourceCatalogAssociation#id}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

The unique ID of the access package catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#catalog_id AccessPackageResourceCatalogAssociation#catalog_id}

---

##### `resourceOriginId`<sup>Required</sup> <a name="resourceOriginId" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.resourceOriginId"></a>

```typescript
public readonly resourceOriginId: string;
```

- *Type:* string

The unique identifier of the resource in the origin system.

In the case of an Azure AD group, this is the identifier of the group

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#resource_origin_id AccessPackageResourceCatalogAssociation#resource_origin_id}

---

##### `resourceOriginSystem`<sup>Required</sup> <a name="resourceOriginSystem" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.resourceOriginSystem"></a>

```typescript
public readonly resourceOriginSystem: string;
```

- *Type:* string

The type of the resource in the origin system, such as SharePointOnline, AadApplication or AadGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#resource_origin_system AccessPackageResourceCatalogAssociation#resource_origin_system}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#id AccessPackageResourceCatalogAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AccessPackageResourceCatalogAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#timeouts AccessPackageResourceCatalogAssociation#timeouts}

---

### AccessPackageResourceCatalogAssociationTimeouts <a name="AccessPackageResourceCatalogAssociationTimeouts" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts.Initializer"></a>

```typescript
import { accessPackageResourceCatalogAssociation } from '@cdktf/provider-azuread'

const accessPackageResourceCatalogAssociationTimeouts: accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#create AccessPackageResourceCatalogAssociation#create}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#delete AccessPackageResourceCatalogAssociation#delete}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#read AccessPackageResourceCatalogAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#create AccessPackageResourceCatalogAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#delete AccessPackageResourceCatalogAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#read AccessPackageResourceCatalogAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessPackageResourceCatalogAssociationTimeoutsOutputReference <a name="AccessPackageResourceCatalogAssociationTimeoutsOutputReference" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { accessPackageResourceCatalogAssociation } from '@cdktf/provider-azuread'

new accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessPackageResourceCatalogAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a>

---



