&lt;hello-world-simple&gt;
====

Install
----

Polyfill tags if you need them. This will include ShadowDOM and Custom Elements support.

```
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/bundles/webcomponents-sd-ce.js"></script>
```

Loading this component. It would be a good idea to use a specific version instead of `latest`.

```
<script src="https://unpkg.com/hello-world-simple@latest/dist/hello-world-simple.min.js"></script>
```

Usage
----

```
<hello-world-simple></hello-world-simple>

<hello-world-simple name="Pickle"></hello-world-simple>

<hello-world-simple>Slot content</hello-world-simple>
```



License
----

HelloWorldSimple is released under an MIT license.

Built, tested, and published with [Nutmeg](https://nutmeg.tools).
