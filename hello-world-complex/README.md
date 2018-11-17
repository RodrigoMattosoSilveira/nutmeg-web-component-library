&lt;hello-world-complex&gt;
====

Install
----

Polyfill tags if you need them. This will include ShadowDOM and Custom Elements support.

```
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/bundles/webcomponents-sd-ce.js"></script>
```

Loading this component. It would be a good idea to use a specific version instead of `latest`.

```
<script src="https://unpkg.com/hello-world-complex@latest/dist/hello-world-complex.min.js"></script>
```

Usage
----

```
<hello-world-complex></hello-world-complex>

<hello-world-complex name="Pickle"></hello-world-complex>

<hello-world-complex>Slot content</hello-world-complex>
```



License
----

HelloWorldComplex is released under an MIT license.

Built, tested, and published with [Nutmeg](https://nutmeg.tools).
