<?php

namespace Drupal\review\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class ReviewController.
 */
class ReviewController extends ControllerBase {

  /**
   * {@inheritdoc}
   */
  public function content() {
    $attachment['content'] = [
      '#type' => 'markup',
      '#markup' => '<div class="btn">' . $this->t('.'),
    ];
    $attachment['#attached']['library'][] = 'review/global-script';
    return $attachment;
  }

}
