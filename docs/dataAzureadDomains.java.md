# `data_azuread_domains`

Refer to the Terraform Registory for docs: [`data_azuread_domains`](https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/domains).

# `dataAzureadDomains` Submodule <a name="`dataAzureadDomains` Submodule" id="@cdktf/provider-azuread.dataAzureadDomains"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadDomains <a name="DataAzureadDomains" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/domains azuread_domains}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_domains.DataAzureadDomains;

DataAzureadDomains.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .adminManaged(java.lang.Boolean)
//  .adminManaged(IResolvable)
//  .id(java.lang.String)
//  .includeUnverified(java.lang.Boolean)
//  .includeUnverified(IResolvable)
//  .onlyDefault(java.lang.Boolean)
//  .onlyDefault(IResolvable)
//  .onlyInitial(java.lang.Boolean)
//  .onlyInitial(IResolvable)
//  .onlyRoot(java.lang.Boolean)
//  .onlyRoot(IResolvable)
//  .supportsServices(java.util.List<java.lang.String>)
//  .timeouts(DataAzureadDomainsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.adminManaged">adminManaged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to only return domains whose DNS is managed by Microsoft 365. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/domains#id DataAzureadDomains#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.includeUnverified">includeUnverified</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` if unverified Azure AD domains should be included. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.onlyDefault">onlyDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to only return the default domain. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.onlyInitial">onlyInitial</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to only return the initial domain, which is your primary Azure Active Directory tenant domain. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.onlyRoot">onlyRoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to only return verified root domains. Excludes subdomains and unverified domains. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.supportsServices">supportsServices</a></code> | <code>java.util.List<java.lang.String></code> | A list of supported services that must be supported by a domain. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts">DataAzureadDomainsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminManaged`<sup>Optional</sup> <a name="adminManaged" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.adminManaged"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to only return domains whose DNS is managed by Microsoft 365.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/domains#admin_managed DataAzureadDomains#admin_managed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/domains#id DataAzureadDomains#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeUnverified`<sup>Optional</sup> <a name="includeUnverified" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.includeUnverified"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` if unverified Azure AD domains should be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/domains#include_unverified DataAzureadDomains#include_unverified}

---

##### `onlyDefault`<sup>Optional</sup> <a name="onlyDefault" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.onlyDefault"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to only return the default domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/domains#only_default DataAzureadDomains#only_default}

---

##### `onlyInitial`<sup>Optional</sup> <a name="onlyInitial" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.onlyInitial"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to only return the initial domain, which is your primary Azure Active Directory tenant domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/domains#only_initial DataAzureadDomains#only_initial}

---

##### `onlyRoot`<sup>Optional</sup> <a name="onlyRoot" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.onlyRoot"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to only return verified root domains. Excludes subdomains and unverified domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/domains#only_root DataAzureadDomains#only_root}

---

##### `supportsServices`<sup>Optional</sup> <a name="supportsServices" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.supportsServices"></a>

- *Type:* java.util.List<java.lang.String>

A list of supported services that must be supported by a domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/domains#supports_services DataAzureadDomains#supports_services}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts">DataAzureadDomainsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/domains#timeouts DataAzureadDomains#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetAdminManaged">resetAdminManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetIncludeUnverified">resetIncludeUnverified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetOnlyDefault">resetOnlyDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetOnlyInitial">resetOnlyInitial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetOnlyRoot">resetOnlyRoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetSupportsServices">resetSupportsServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.putTimeouts"></a>

```java
public void putTimeouts(DataAzureadDomainsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts">DataAzureadDomainsTimeouts</a>

---

##### `resetAdminManaged` <a name="resetAdminManaged" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetAdminManaged"></a>

```java
public void resetAdminManaged()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetId"></a>

```java
public void resetId()
```

##### `resetIncludeUnverified` <a name="resetIncludeUnverified" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetIncludeUnverified"></a>

```java
public void resetIncludeUnverified()
```

##### `resetOnlyDefault` <a name="resetOnlyDefault" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetOnlyDefault"></a>

```java
public void resetOnlyDefault()
```

##### `resetOnlyInitial` <a name="resetOnlyInitial" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetOnlyInitial"></a>

```java
public void resetOnlyInitial()
```

##### `resetOnlyRoot` <a name="resetOnlyRoot" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetOnlyRoot"></a>

```java
public void resetOnlyRoot()
```

##### `resetSupportsServices` <a name="resetSupportsServices" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetSupportsServices"></a>

```java
public void resetSupportsServices()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_domains.DataAzureadDomains;

DataAzureadDomains.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_domains.DataAzureadDomains;

DataAzureadDomains.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_domains.DataAzureadDomains;

DataAzureadDomains.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.domains">domains</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList">DataAzureadDomainsDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference">DataAzureadDomainsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.adminManagedInput">adminManagedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.includeUnverifiedInput">includeUnverifiedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyDefaultInput">onlyDefaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyInitialInput">onlyInitialInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyRootInput">onlyRootInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.supportsServicesInput">supportsServicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts">DataAzureadDomainsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.adminManaged">adminManaged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.includeUnverified">includeUnverified</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyDefault">onlyDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyInitial">onlyInitial</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyRoot">onlyRoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.supportsServices">supportsServices</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.domains"></a>

```java
public DataAzureadDomainsDomainsList getDomains();
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList">DataAzureadDomainsDomainsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.timeouts"></a>

```java
public DataAzureadDomainsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference">DataAzureadDomainsTimeoutsOutputReference</a>

---

##### `adminManagedInput`<sup>Optional</sup> <a name="adminManagedInput" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.adminManagedInput"></a>

```java
public java.lang.Object getAdminManagedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeUnverifiedInput`<sup>Optional</sup> <a name="includeUnverifiedInput" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.includeUnverifiedInput"></a>

```java
public java.lang.Object getIncludeUnverifiedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `onlyDefaultInput`<sup>Optional</sup> <a name="onlyDefaultInput" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyDefaultInput"></a>

```java
public java.lang.Object getOnlyDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `onlyInitialInput`<sup>Optional</sup> <a name="onlyInitialInput" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyInitialInput"></a>

```java
public java.lang.Object getOnlyInitialInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `onlyRootInput`<sup>Optional</sup> <a name="onlyRootInput" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyRootInput"></a>

```java
public java.lang.Object getOnlyRootInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `supportsServicesInput`<sup>Optional</sup> <a name="supportsServicesInput" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.supportsServicesInput"></a>

```java
public java.util.List<java.lang.String> getSupportsServicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts">DataAzureadDomainsTimeouts</a>

---

##### `adminManaged`<sup>Required</sup> <a name="adminManaged" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.adminManaged"></a>

```java
public java.lang.Object getAdminManaged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includeUnverified`<sup>Required</sup> <a name="includeUnverified" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.includeUnverified"></a>

```java
public java.lang.Object getIncludeUnverified();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `onlyDefault`<sup>Required</sup> <a name="onlyDefault" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyDefault"></a>

```java
public java.lang.Object getOnlyDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `onlyInitial`<sup>Required</sup> <a name="onlyInitial" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyInitial"></a>

```java
public java.lang.Object getOnlyInitial();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `onlyRoot`<sup>Required</sup> <a name="onlyRoot" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyRoot"></a>

```java
public java.lang.Object getOnlyRoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `supportsServices`<sup>Required</sup> <a name="supportsServices" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.supportsServices"></a>

```java
public java.util.List<java.lang.String> getSupportsServices();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadDomainsConfig <a name="DataAzureadDomainsConfig" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_domains.DataAzureadDomainsConfig;

DataAzureadDomainsConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .adminManaged(java.lang.Boolean)
//  .adminManaged(IResolvable)
//  .id(java.lang.String)
//  .includeUnverified(java.lang.Boolean)
//  .includeUnverified(IResolvable)
//  .onlyDefault(java.lang.Boolean)
//  .onlyDefault(IResolvable)
//  .onlyInitial(java.lang.Boolean)
//  .onlyInitial(IResolvable)
//  .onlyRoot(java.lang.Boolean)
//  .onlyRoot(IResolvable)
//  .supportsServices(java.util.List<java.lang.String>)
//  .timeouts(DataAzureadDomainsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.adminManaged">adminManaged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to only return domains whose DNS is managed by Microsoft 365. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/domains#id DataAzureadDomains#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.includeUnverified">includeUnverified</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` if unverified Azure AD domains should be included. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.onlyDefault">onlyDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to only return the default domain. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.onlyInitial">onlyInitial</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to only return the initial domain, which is your primary Azure Active Directory tenant domain. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.onlyRoot">onlyRoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to only return verified root domains. Excludes subdomains and unverified domains. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.supportsServices">supportsServices</a></code> | <code>java.util.List<java.lang.String></code> | A list of supported services that must be supported by a domain. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts">DataAzureadDomainsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminManaged`<sup>Optional</sup> <a name="adminManaged" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.adminManaged"></a>

```java
public java.lang.Object getAdminManaged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to only return domains whose DNS is managed by Microsoft 365.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/domains#admin_managed DataAzureadDomains#admin_managed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/domains#id DataAzureadDomains#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeUnverified`<sup>Optional</sup> <a name="includeUnverified" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.includeUnverified"></a>

```java
public java.lang.Object getIncludeUnverified();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` if unverified Azure AD domains should be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/domains#include_unverified DataAzureadDomains#include_unverified}

---

##### `onlyDefault`<sup>Optional</sup> <a name="onlyDefault" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.onlyDefault"></a>

```java
public java.lang.Object getOnlyDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to only return the default domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/domains#only_default DataAzureadDomains#only_default}

---

##### `onlyInitial`<sup>Optional</sup> <a name="onlyInitial" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.onlyInitial"></a>

```java
public java.lang.Object getOnlyInitial();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to only return the initial domain, which is your primary Azure Active Directory tenant domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/domains#only_initial DataAzureadDomains#only_initial}

---

##### `onlyRoot`<sup>Optional</sup> <a name="onlyRoot" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.onlyRoot"></a>

```java
public java.lang.Object getOnlyRoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to only return verified root domains. Excludes subdomains and unverified domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/domains#only_root DataAzureadDomains#only_root}

---

##### `supportsServices`<sup>Optional</sup> <a name="supportsServices" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.supportsServices"></a>

```java
public java.util.List<java.lang.String> getSupportsServices();
```

- *Type:* java.util.List<java.lang.String>

A list of supported services that must be supported by a domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/domains#supports_services DataAzureadDomains#supports_services}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.timeouts"></a>

```java
public DataAzureadDomainsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts">DataAzureadDomainsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/domains#timeouts DataAzureadDomains#timeouts}

---

### DataAzureadDomainsDomains <a name="DataAzureadDomainsDomains" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomains.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_domains.DataAzureadDomainsDomains;

DataAzureadDomainsDomains.builder()
    .build();
```


### DataAzureadDomainsTimeouts <a name="DataAzureadDomainsTimeouts" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_domains.DataAzureadDomainsTimeouts;

DataAzureadDomainsTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/domains#read DataAzureadDomains#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/domains#read DataAzureadDomains#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadDomainsDomainsList <a name="DataAzureadDomainsDomainsList" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_domains.DataAzureadDomainsDomainsList;

new DataAzureadDomainsDomainsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.get"></a>

```java
public DataAzureadDomainsDomainsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzureadDomainsDomainsOutputReference <a name="DataAzureadDomainsDomainsOutputReference" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_domains.DataAzureadDomainsDomainsOutputReference;

new DataAzureadDomainsDomainsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.adminManaged">adminManaged</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.default">default</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.initial">initial</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.root">root</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.supportedServices">supportedServices</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.verified">verified</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomains">DataAzureadDomainsDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminManaged`<sup>Required</sup> <a name="adminManaged" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.adminManaged"></a>

```java
public IResolvable getAdminManaged();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.default"></a>

```java
public IResolvable getDefault();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `initial`<sup>Required</sup> <a name="initial" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.initial"></a>

```java
public IResolvable getInitial();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `root`<sup>Required</sup> <a name="root" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.root"></a>

```java
public IResolvable getRoot();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `supportedServices`<sup>Required</sup> <a name="supportedServices" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.supportedServices"></a>

```java
public java.util.List<java.lang.String> getSupportedServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `verified`<sup>Required</sup> <a name="verified" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.verified"></a>

```java
public IResolvable getVerified();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.internalValue"></a>

```java
public DataAzureadDomainsDomains getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomains">DataAzureadDomainsDomains</a>

---


### DataAzureadDomainsTimeoutsOutputReference <a name="DataAzureadDomainsTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_domains.DataAzureadDomainsTimeoutsOutputReference;

new DataAzureadDomainsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts">DataAzureadDomainsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts">DataAzureadDomainsTimeouts</a>

---



