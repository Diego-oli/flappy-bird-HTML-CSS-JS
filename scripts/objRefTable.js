const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Plugins.Text,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Acts.Scroll,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.Compare
	];
};
self.C3_JsPropNameTable = [
	{Sólido: 0},
	{map: 0},
	{morte: 0},
	{moeda: 0},
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{player: 0},
	{Texto: 0},
	{porta: 0},
	{pontos: 0}
];

self.InstanceType = {
	map: class extends self.ISpriteInstance {},
	morte: class extends self.ISpriteInstance {},
	moeda: class extends self.ISpriteInstance {},
	player: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	porta: class extends self.ISpriteInstance {}
}