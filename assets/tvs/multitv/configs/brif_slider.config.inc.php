<?php
$settings['display'] = 'vertical';
$settings['fields'] = [
	'image' => [
		'caption' => 'Изображение слайла 1340x700 px',
		'type' => 'image'
	],
	'thumb' => [
		'caption' => 'thumb',
		'type' => 'thumb',
		'thumbof' => 'image'
	],
	'header' => [
		'caption' => 'Заголовок на плашке',
		'type' => 'text',
	],
	'title' => [
		'caption' => 'Текст описания на плашке',
		'type' => 'text',
	],
];
$settings['templates'] = [
	'outerTpl' => '<div class="swiper-wrapper slider__items">[+wrapper+]</div>',
	'rowTpl' => '
	<div class="swiper-slide slider__item" data-section_header="[+header+]" data-section_title="[+title+]">
		<a href="portfolio" class="slider__link">
			<img class="slider__img" src="[+image+]" alt="фото дизайна на слайдере">
		</a>
	</div>'
];
$settings['prepare'] = function ($data, $modx, $_multiTV) {
	if ($data['iteration'] == 1) {
		$placeholders = [
			'header' => $data['header'],
			'title' => $data['title']
		];
		$modx->toPlaceholders($placeholders, 'slider_brif.');
	}

	return $data;
};
